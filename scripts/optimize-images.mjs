import sharp from 'sharp';
import { glob } from 'glob';
import { promises as fs } from 'fs';
import path from 'path';

async function optimizeImages() {
  const images = glob.sync('public/**/*.{jpg,png}');
  
  for (const image of images) {
    const webpPath = image.replace(/\.(jpg|png)$/, '.webp');
    
    try {
      await sharp(image)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      // Create responsive versions
      const sizes = [320, 640, 1024, 1920];
      for (const width of sizes) {
        const resizedPath = image.replace(/\.(jpg|png)$/, `-${width}.webp`);
        await sharp(image)
          .resize(width)
          .webp({ quality: 80 })
          .toFile(resizedPath);
      }
      
      console.log(`✓ Optimized: ${path.basename(image)}`);
    } catch (error) {
      console.error(`✗ Failed to optimize ${image}:`, error);
    }
  }
}

optimizeImages().catch(console.error); 