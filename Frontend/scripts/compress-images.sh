#!/bin/bash

# Image Compression Script
# This script helps compress images using common tools
# 
# Prerequisites:
#   Mac: brew install imagemagick webp
#   Linux: apt-get install imagemagick webp

echo "🖼️  Image Compression Helper"
echo "=============================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found"
    echo "Install: brew install imagemagick (Mac) or apt-get install imagemagick (Linux)"
    echo ""
fi

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ WebP tools not found"
    echo "Install: brew install webp (Mac) or apt-get install webp (Linux)"
    echo ""
fi

echo "📝 Manual Compression Options:"
echo ""
echo "1. Online Tools (Easiest):"
echo "   • TinyPNG: https://tinypng.com"
echo "   • Squoosh: https://squoosh.app"
echo ""
echo "2. Desktop Apps:"
echo "   • ImageOptim (Mac): https://imageoptim.com"
echo "   • FileOptimizer (Windows): https://sourceforge.net/projects/nikkhokkho/"
echo ""
echo "3. Command Line (if tools installed):"
echo ""
echo "   # Compress JPEG (quality 85)"
echo "   convert input.jpg -quality 85 output.jpg"
echo ""
echo "   # Convert to WebP"
echo "   cwebp -q 80 input.jpg -o output.webp"
echo ""
echo "   # Batch convert all JPGs in a folder"
echo "   for file in *.jpg; do cwebp -q 80 \"\$file\" -o \"\${file%.jpg}.webp\"; done"
echo ""
echo "4. Automated Solution:"
echo "   Install vite-plugin-imagemin for automatic compression during build"
echo "   npm install --save-dev vite-plugin-imagemin"
echo ""
echo "🎯 Priority Images to Compress:"
echo "   Run: npm run check-images"
echo ""
