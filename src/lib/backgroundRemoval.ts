import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

function smoothMask(maskData: Float32Array, width: number, height: number, radius: number = 2): Float32Array {
  const smoothed = new Float32Array(maskData.length);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      let sum = 0;
      let count = 0;
      
      // Apply Gaussian-like smoothing
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const ny = y + dy;
          const nx = x + dx;
          
          if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
            const nIdx = ny * width + nx;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const weight = Math.exp(-(distance * distance) / (2 * radius * radius));
            
            sum += maskData[nIdx] * weight;
            count += weight;
          }
        }
      }
      
      smoothed[idx] = sum / count;
    }
  }
  
  return smoothed;
}

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    console.log('Starting background removal process...');
    
    let segmenter;
    try {
      // Try WebGPU first
      segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
        device: 'webgpu',
      });
    } catch (webgpuError) {
      console.log('WebGPU failed, falling back to WASM:', webgpuError);
      // Fallback to WASM
      segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
        device: 'wasm',
      });
    }
    
    // Convert HTMLImageElement to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Resize image if needed and draw it to canvas
    const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
    console.log(`Image ${wasResized ? 'was' : 'was not'} resized. Final dimensions: ${canvas.width}x${canvas.height}`);
    
    // Get image data as base64
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    console.log('Image converted to base64');
    
    // Process the image with the segmentation model
    console.log('Processing with segmentation model...');
    const result = await segmenter(imageData);
    
    console.log('Segmentation result:', result);
    
    if (!result || !Array.isArray(result) || result.length === 0) {
      throw new Error('Invalid segmentation result');
    }
    
    // Find the person mask (usually the largest mask or look for person-like labels)
    let personMask = null;
    for (const segment of result) {
      if (segment.label?.toLowerCase().includes('person') || 
          segment.label?.toLowerCase().includes('human') ||
          !personMask) { // Use first mask as fallback
        personMask = segment;
        break;
      }
    }
    
    if (!personMask?.mask) {
      throw new Error('No person mask found in segmentation result');
    }
    
    // Create a new canvas for the masked image with white background
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    // Fill with white background first
    outputCtx.fillStyle = 'white';
    outputCtx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Normalize mask to [0,1] (handles Uint8ClampedArray 0..255 or Float32 0..1)
    const rawMaskData = personMask.mask.data as any;
    const normalizedMask = new Float32Array(rawMaskData.length);
    for (let i = 0; i < rawMaskData.length; i++) {
      const v = rawMaskData[i];
      normalizedMask[i] = v > 1 ? v / 255 : v;
    }

    // Smooth the mask for better edges
    const smoothedMask = smoothMask(normalizedMask, canvas.width, canvas.height, 3);

    // Get original image data
    const originalImageData = outputCtx.getImageData(0, 0, canvas.width, canvas.height);
    const originalData = originalImageData.data;
    
    // Draw original image to a temp canvas to get its pixel data
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) throw new Error('Could not get temp canvas context');
    tempCtx.drawImage(canvas, 0, 0);
    const sourceImageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
    const sourceData = sourceImageData.data;

    // Apply the smoothed mask (keep subject, white background)
    for (let i = 0; i < smoothedMask.length; i++) {
      const maskValue = 1 - smoothedMask[i]; // Invert mask (1 = keep pixel, 0 = remove)
      const pixelIndex = i * 4;
      
      if (maskValue > 0.1) { // Keep original pixel if mask value is high enough
        originalData[pixelIndex] = sourceData[pixelIndex];     // R
        originalData[pixelIndex + 1] = sourceData[pixelIndex + 1]; // G
        originalData[pixelIndex + 2] = sourceData[pixelIndex + 2]; // B
        originalData[pixelIndex + 3] = 255; // Full opacity
      }
      // Else keep white background (already filled)
    }

    outputCtx.putImageData(originalImageData, 0, 0);
    console.log('Smoothed mask applied with white background');
    
    // Convert canvas to blob
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            console.log('Successfully created final blob');
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const loadImageFromUrl = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.crossOrigin = 'anonymous';
    img.src = url;
  });
};
