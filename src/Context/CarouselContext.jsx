import { createContext, useState, useEffect } from 'react';

export const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 5); // 5 is the number of features
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 5) % 5);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 5);
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
