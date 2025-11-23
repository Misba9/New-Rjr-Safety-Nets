import Section from '../common/Section';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const CtaBanner = () => {
  return (
    <Section className="bg-brand-dark-blue text-white">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Safety Solution?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote. Our experts are ready to help you secure your space.
        </p>
        <Button asLink to="/contact" size="lg">Get Free Quote</Button>
      </motion.div>
    </Section>
  );
};

export default CtaBanner;
