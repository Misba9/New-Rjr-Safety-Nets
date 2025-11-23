import { useState } from 'react';
import { GalleryImage } from '../types';

export const useLightbox = (images: GalleryImage[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return {
    isOpen,
    openLightbox,
    closeLightbox,
    goToNext,
    goToPrevious,
    currentImage,
  };
};
