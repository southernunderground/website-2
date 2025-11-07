// src/utils/index.ts

// Export existing utilities
export * from './seoMetadata';

// Export new responsive utilities
export * from './responsive';
export * from './imageOptimization';

// Re-export components for convenience
export { default as ResponsiveImage } from '../components/ui/ResponsiveImage';
export { default as ResponsiveContainer } from '../components/ui/ResponsiveContainer';
export { default as ResponsiveGrid } from '../components/ui/ResponsiveGrid';