import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: Array<{
    id: string;
    image: string;
    alt: string;
  }>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  height?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  height = 'h-96',
}) => {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    console.log('Carousel initialized with', items.length, 'items');
    items.forEach((item, idx) => {
      console.log(`Item ${idx}:`, item.image);
    });
  }, [items]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const handleImageLoad = (index: number) => {
    console.log('Image loaded:', index, items[index]?.image);
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const handleImageError = (index: number, error: any) => {
    console.error('Image failed to load:', index, items[index]?.image, error);
  };

  if (!items || items.length === 0) {
    return (
      <div className={`relative w-full ${height} bg-gray-200 rounded-lg flex items-center justify-center`}>
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${height} rounded-lg overflow-hidden shadow-lg bg-gray-900`}>
      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden bg-gray-800">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover"
              onLoad={() => {
                console.log('Image loaded successfully:', item.image);
                handleImageLoad(index);
              }}
              onError={(e) => {
                console.error('Image load error:', item.image, e);
                handleImageError(index, e);
              }}
            />
            {!loadedImages.has(index) && index === current && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-2"></div>
                  <p>Loading image...</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {current + 1} / {items.length}
      </div>
    </div>
  );
};
