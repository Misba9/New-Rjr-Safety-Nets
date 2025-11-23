import { useState } from 'react';
import { galleryImages } from '../../data/mockData';
import { useLightbox } from '../../hooks/useLightbox';
import Lightbox from './Lightbox';
import { motion } from 'framer-motion';

const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

const GalleryGrid = () => {
  const [filter, setFilter] = useState('all');
  const filteredImages = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);
  const { isOpen, openLightbox, closeLightbox, currentImage, goToNext, goToPrevious } = useLightbox(filteredImages);
  
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-colors ${
              filter === category 
                ? 'bg-brand-primary text-white' 
                : 'bg-gray-200 text-brand-dark-blue hover:bg-brand-primary/20'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <Lightbox 
        isOpen={isOpen}
        onClose={closeLightbox}
        image={currentImage}
        onNext={goToNext}
        onPrev={goToPrevious}
      />
    </>
  );
};

export default GalleryGrid;