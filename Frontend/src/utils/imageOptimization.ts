// src/utils/imageOptimization.ts

import { getDeviceType, BREAKPOINTS } from './responsive';

/**
 * Image size configurations for different devices
 */
export const IMAGE_SIZES = {
  mobile: {
    small: { width: 320, height: 240 },
    medium: { width: 480, height: 360 },
    large: { width: 640, height: 480 },
  },
  tablet: {
    small: { width: 480, height: 360 },
    medium: { width: 768, height: 576 },
    large: { width: 1024, height: 768 },
  },
  desktop: {
    small: { width: 640, height: 480 },
    medium: { width: 1024, height: 768 },
    large: { width: 1280, height: 960 },
    xlarge: { width: 1920, height: 1440 },
  },
} as const;

/**
 * Image quality settings for different devices and connection speeds
 */
export const IMAGE_QUALITY = {
  low: 60,
  medium: 75,
  high: 85,
  max: 95,
} as const;

/**
 * Supported image formats in order of preference
 */
export const IMAGE_FORMATS = ['webp', 'avif', 'jpg', 'png'] as const;

/**
 * Interface for responsive image configuration
 */
export interface ResponsiveImageConfig {
  src: string;
  alt: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
}

/**
 * Interface for image optimization options
 */
export interface ImageOptimizationOptions {
  quality?: keyof typeof IMAGE_QUALITY;
  format?: typeof IMAGE_FORMATS[number];
  deviceType?: 'mobile' | 'tablet' | 'desktop';
  lazy?: boolean;
  blur?: boolean;
}

/**
 * Generate responsive image sizes attribute
 */
export function generateImageSizes(
  mobileSize: string = '100vw',
  tabletSize: string = '50vw',
  desktopSize: string = '33vw'
): string {
  return `(max-width: ${BREAKPOINTS.md}px) ${mobileSize}, (max-width: ${BREAKPOINTS.lg}px) ${tabletSize}, ${desktopSize}`;
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(
  baseSrc: string,
  sizes: Array<{ width: number; suffix?: string }>
): string {
  return sizes
    .map(({ width, suffix = '' }) => {
      const src = baseSrc.replace(/\.(jpg|jpeg|png|webp)$/i, `${suffix}.$1`);
      return `${src} ${width}w`;
    })
    .join(', ');
}

/**
 * Get optimized image source based on device and options
 */
export function getOptimizedImageSrc(
  src: string,
  options: ImageOptimizationOptions = {}
): string {
  const {
    quality = 'medium',
    format,
    deviceType = getDeviceType(),
  } = options;

  // In a real implementation, this would integrate with an image optimization service
  // For now, we'll return the original src with query parameters for future integration
  const params = new URLSearchParams();
  params.set('q', IMAGE_QUALITY[quality].toString());
  
  if (format) {
    params.set('f', format);
  }
  
  params.set('device', deviceType);
  
  return `${src}?${params.toString()}`;
}

/**
 * Create responsive image props
 */
export function createResponsiveImageProps(
  config: ResponsiveImageConfig,
  options: ImageOptimizationOptions = {}
): React.ImgHTMLAttributes<HTMLImageElement> {
  const {
    src,
    alt,
    sizes = generateImageSizes(),
    loading = 'lazy',
    className = '',
    aspectRatio,
    objectFit = 'cover',
    objectPosition = 'center',
  } = config;

  const optimizedSrc = getOptimizedImageSrc(src, options);
  
  // Generate srcset for different screen densities
  const srcSet = generateSrcSet(src, [
    { width: 480, suffix: '-480' },
    { width: 768, suffix: '-768' },
    { width: 1024, suffix: '-1024' },
    { width: 1280, suffix: '-1280' },
    { width: 1920, suffix: '-1920' },
  ]);

  const baseClasses = [
    'w-full h-full',
    `object-${objectFit}`,
    objectPosition !== 'center' ? `object-${objectPosition}` : '',
    aspectRatio ? `aspect-${aspectRatio}` : '',
    className,
  ].filter(Boolean).join(' ');

  return {
    src: optimizedSrc,
    srcSet,
    sizes,
    alt,
    loading,
    className: baseClasses,
    decoding: 'async',
  };
}

/**
 * Lazy loading intersection observer for images
 */
export function createImageLazyLoader() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          const srcset = img.dataset.srcset;

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }

          if (srcset) {
            img.srcset = srcset;
            img.removeAttribute('data-srcset');
          }

          img.classList.remove('opacity-0');
          img.classList.add('opacity-100', 'transition-opacity', 'duration-300');
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, options: ImageOptimizationOptions = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const optimizedSrc = getOptimizedImageSrc(src, options);
    
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = optimizedSrc;
  });
}

/**
 * Batch preload multiple images
 */
export async function preloadImages(
  sources: Array<{ src: string; options?: ImageOptimizationOptions }>
): Promise<void> {
  const promises = sources.map(({ src, options }) => preloadImage(src, options));
  await Promise.all(promises);
}

/**
 * Get image dimensions from URL (for layout shift prevention)
 */
export function getImageDimensions(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Calculate aspect ratio from dimensions
 */
export function calculateAspectRatio(width: number, height: number): string {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  return `${width / divisor}/${height / divisor}`;
}

// Import React for types
import React from 'react';