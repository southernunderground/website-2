# Image Optimization Guide

## Quick Wins Implemented ✅

### 1. **Lazy Loading**
- Created `OptimizedImage` component with intersection observer
- Images load only when they enter viewport
- Reduces initial page load significantly

### 2. **Code Splitting**
- Split vendor libraries into separate chunks
- React, animations load independently
- Faster initial JavaScript execution

### 3. **Resource Hints**
- Added preload for critical video and images
- Prioritized above-the-fold content
- Improved perceived performance

### 4. **Browser Caching**
- Created `.htaccess` for long-term caching
- Images cached for 1 year
- Repeat visits load instantly

## Next Steps for Maximum Performance 🚀

### Compress Existing Images

Run the image scanner:
```bash
node scripts/optimize-images.js
```

**Recommended Tools:**
1. **TinyPNG** (https://tinypng.com) - Easy drag & drop
2. **Squoosh** (https://squoosh.app) - Advanced control
3. **ImageOptim** (Mac) - Batch processing

**Target:** Reduce image sizes by 60-80% without visible quality loss

### Convert to Modern Formats

**WebP Format Benefits:**
- 25-35% smaller than JPEG
- Supports transparency like PNG
- Supported by all modern browsers

**How to convert:**
```bash
# Install cwebp (one-time)
brew install webp  # Mac
# or download from: https://developers.google.com/speed/webp/download

# Convert images
cwebp -q 80 input.jpg -o output.webp
```

### Use a CDN (Recommended)

**Best Options:**
1. **Cloudflare Images** - Automatic optimization
2. **Cloudinary** - Free tier available
3. **imgix** - Advanced transformations

**Benefits:**
- Automatic format conversion
- Responsive image sizing
- Global edge caching
- Zero code changes needed

### Responsive Images

Update `OptimizedImage` component to use srcset:
```tsx
<img
  src={src}
  srcSet={`${src}?w=400 400w, ${src}?w=800 800w, ${src}?w=1200 1200w`}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt={alt}
/>
```

## Performance Metrics to Track

**Before Optimization:**
- First Contentful Paint (FCP): ~3-4s
- Largest Contentful Paint (LCP): ~5-7s
- Total Page Size: ~15-20MB

**Target After Optimization:**
- FCP: <1.5s ✅
- LCP: <2.5s ✅
- Total Page Size: <3MB ✅

## Testing Your Changes

1. **Chrome DevTools:**
   - Open DevTools (F12)
   - Network tab → Disable cache
   - Throttle to "Fast 3G"
   - Reload and check load times

2. **Lighthouse:**
   - DevTools → Lighthouse tab
   - Run audit
   - Target: 90+ performance score

3. **WebPageTest:**
   - Visit https://webpagetest.org
   - Test from multiple locations
   - Check filmstrip view

## Quick Reference

### Image Size Guidelines
- Hero images: 1920x1080px, <300KB
- Project cards: 800x600px, <150KB
- Thumbnails: 400x300px, <50KB
- Icons/logos: SVG preferred, or PNG <20KB

### Format Selection
- Photos: WebP or JPEG (quality 75-85)
- Graphics/logos: SVG or WebP
- Transparency needed: WebP or PNG
- Animations: Use CSS/SVG instead of GIF

### Loading Strategy
- Above fold: `loading="eager"` + preload
- Below fold: `loading="lazy"`
- Background images: Lazy load with intersection observer
- Critical CSS: Inline in `<head>`

## Automated Solutions

### Option 1: Vite Plugin (Recommended)
```bash
npm install --save-dev vite-plugin-imagemin
```

Add to `vite.config.ts`:
```ts
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      webp: { quality: 80 }
    })
  ]
});
```

### Option 2: Build Script
Create automated compression during build process.

## Support

For questions or issues:
1. Check browser console for errors
2. Verify image paths are correct
3. Test on multiple devices/browsers
4. Use Lighthouse for diagnostics
