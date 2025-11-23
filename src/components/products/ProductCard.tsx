import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Service } from '../../types';

interface ProductCardProps {
  service: Service;
}

const ProductCard = ({ service }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col h-full"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.18 }}
    >
      <div className="overflow-hidden">
        <img src={service.imageUrl} alt={service.name} className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-brand-dark-blue mb-2">{service.name}</h3>
        <p className="text-brand-text text-xs sm:text-sm mb-4 flex-grow">{service.shortDescription}</p>
        <Button asLink to={`/services/${service.slug}`} variant="outline" size="sm" className="text-xs sm:text-sm">
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;