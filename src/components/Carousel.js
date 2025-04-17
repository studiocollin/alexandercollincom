'use client';

import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrent((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  // Click or tap to advance
  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <main
      className="w-screen h-screen flex items-center justify-center relative overflow-hidden"
      onClick={handleClick}
    >
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="max-h-[70vh] max-w-[70vw] object-contain"
      />
    </main>
  )
};

export default Carousel;