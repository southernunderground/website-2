import React, { useState, useEffect } from 'react';

const certImages = [
  {
    src: '/images/certifications/ABC.png',
    alt: 'ABC Associated Builders and Contractors'
  },
  {
    src: '/images/certifications/alliance-logo.webp',
    alt: 'Alliance Logo'
  },
  {
    src: '/images/certifications/avetta_member.png',
    alt: 'Avetta Member'
  },
  {
    src: '/images/certifications/isnet.png',
    alt: 'ISNetworld Member'
  },
  {
    src: '/images/certifications/licensed-bonded-insured-vector-icon-business-86546455-removebg-preview.png',
    alt: 'Licensed Bonded Insured'
  },
  {
    src: '/images/certifications/OIP.png',
    alt: 'OSHA Certification'
  },
  {
    src: '/images/certifications/state_of_LA.png',
    alt: 'State of Louisiana Certification'
  }
];

export const Certifications: React.FC = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPausedFromClick, setIsPausedFromClick] = useState(false);
  const [containerWidth, setContainerWidth] = useState(600);
  const [itemWidth, setItemWidth] = useState(200); // Width including gap
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

  // Calculate how many items are visible based on screen size
  const getVisibleItemsCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2; // Mobile
      if (window.innerWidth < 1024) return 5; // Tablet
      return 5; // Desktop - keeping it at 3 as requested
    }
    return 5;
  };

  const [visibleItems, setVisibleItems] = useState(3);

  // Update visible items on resize
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleItemsCount();
      setVisibleItems(newVisibleCount);
      setContainerWidth(newVisibleCount * 200);
      setItemWidth(200);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous sliding animation - infinite without reset
  useEffect(() => {
    if (isHovered || isPausedFromClick) return;
    
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newTranslate = prev - 0.5; // Move 0.5px per frame for smooth motion
        
        // Update active index based on position for navigation dots
        const activeIndex = Math.floor(Math.abs(newTranslate) / itemWidth) % certImages.length;
        setCurrentActiveIndex(activeIndex);
        
        return newTranslate; // No reset - infinite scrolling
      });
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, [isHovered, isPausedFromClick, itemWidth]);

  // Manual navigation to specific logo
  const goToLogo = (index: number) => {
    const targetPosition = -(index * itemWidth);
    setTranslateX(targetPosition);
    setCurrentActiveIndex(index);
  };

  // Navigate to next logo
  const goToNext = () => {
    const nextIndex = (currentActiveIndex + 1) % certImages.length;
    goToLogo(nextIndex);
    setIsPausedFromClick(true); // Pause animation after click
  };

  // Navigate to previous logo
  const goToPrevious = () => {
    const prevIndex = (currentActiveIndex - 1 + certImages.length) % certImages.length;
    goToLogo(prevIndex);
    setIsPausedFromClick(true); // Pause animation after click
  };

  // Handle mouse enter on interactive areas
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPausedFromClick(false); // Resume animation when hovering
  };

  // Handle mouse leave from interactive areas
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPausedFromClick(false); // Resume animation when leaving
  };

  // Create an extended array for seamless infinite looping
  const extendedImages = [];
  // Create enough copies to ensure smooth infinite scrolling
  for (let i = 0; i < 50; i++) { // 50 copies should be enough for infinite feel
    extendedImages.push(...certImages);
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Certifications & Associations
          </h2>
        </div>

        {/* Continuous Sliding Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 border border-gray-200 dark:border-gray-600"
            aria-label="Previous certification"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 border border-gray-200 dark:border-gray-600"
            aria-label="Next certification"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Sliding Container */}
          <div 
            className="relative overflow-hidden mx-auto"
            style={{ width: '100%', height: '200px', maxWidth: `${containerWidth}px` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Sliding Strip */}
            <div 
              className="flex items-center absolute top-0 left-0 h-full"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: 'none', // No CSS transition for smooth manual control
                width: `${extendedImages.length * itemWidth}px`
              }}
            >
              {extendedImages.map((cert, index) => (
                <div
                  key={`${cert.alt}-${index}`}
                  className="flex items-center justify-center flex-shrink-0 mx-4"
                  style={{ width: `${itemWidth - 32}px`, height: '160px' }}
                >
                  <div className="flex items-center justify-center w-40 h-32 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Manual Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {certImages.map((cert, index) => (
            <button
              key={index}
              onClick={() => goToLogo(index)}
              className={`group relative transition-all duration-300 ${
                index === currentActiveIndex
                  ? 'transform scale-110'
                  : 'hover:transform hover:scale-105'
              }`}
              aria-label={`Go to ${cert.alt}`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentActiveIndex
                  ? 'bg-blue-600 dark:bg-blue-400 shadow-lg'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`} />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {cert.alt}
              </div>
            </button>
          ))}
        </div>

        {/* Controls Info */}
        {/* <div className="text-center mt-4">
          {isPausedFromClick && !isHovered ? (
            <span className="text-sm text-orange-500 dark:text-orange-400">
              Animation paused • Hover over arrows or certifications to resume
            </span>
          ) : isHovered ? (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Animation paused • Use arrows or dots to navigate
            </span>
          ) : (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Hover to pause • Use arrows or dots to navigate certifications
            </span>
          )}
        </div> */}
      </div>
    </section>
  );
};