#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps identify large images that should be optimized.
 * 
 * To actually compress images, install sharp:
 * npm install --save-dev sharp
 * 
 * Then run: node scripts/optimize-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
const sizeThreshold = 500 * 1024; // 500KB

function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

function scanDirectory(dir, results = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath, results);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const size = stat.size;
        if (size > sizeThreshold) {
          results.push({
            path: filePath.replace(publicDir, ''),
            size: getFileSizeInKB(filePath),
            ext: ext
          });
        }
      }
    }
  });

  return results;
}

console.log('🔍 Scanning for large images...\n');
const largeImages = scanDirectory(publicDir);

if (largeImages.length === 0) {
  console.log('✅ No large images found (all under 500KB)');
} else {
  console.log(`⚠️  Found ${largeImages.length} images over 500KB:\n`);
  
  largeImages
    .sort((a, b) => parseFloat(b.size) - parseFloat(a.size))
    .forEach(img => {
      console.log(`  ${img.path} - ${img.size} KB`);
    });

  console.log('\n📝 Recommendations:');
  console.log('  1. Use online tools like TinyPNG or Squoosh to compress images');
  console.log('  2. Convert to WebP format for better compression');
  console.log('  3. Resize images to appropriate dimensions before uploading');
  console.log('  4. Consider using a CDN with automatic image optimization');
}
