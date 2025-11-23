import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: GalleryImage | undefined;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ isOpen, onClose, image, onNext, onPrev }: LightboxProps) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brand-primary transition-colors z-[110]"
            onClick={onClose}
          >
            <X size={40} />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white hover:text-brand-primary transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
          >
            <ChevronLeft size={48} />
          </button>

          <button
            className="absolute right-4 md:right-8 text-white hover:text-brand-primary transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
          >
            <ChevronRight size={48} />
          </button>

          <motion.div
            layoutId={image.id}
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={image.src} alt={image.alt} className="max-w-full max-h-full object-contain rounded-lg" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
