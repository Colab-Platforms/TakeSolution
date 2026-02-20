import { createContext, useState, useEffect } from 'react';

export const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide with different intervals - main image (0) stays 10s, others 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % 6;
        return nextIndex;
      });
    }, (currentIndex === 0 ? 7000 : 4000));
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 6) % 6);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 6);
  };

  const setIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider value={{ currentIndex, handlePrev, handleNext, setIndex }}>
      {children}
    </CarouselContext.Provider>
  );
};
