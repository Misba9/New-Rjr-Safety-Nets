import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { whyChooseUsData } from '../../data/mockData';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <Section>
      <SectionTitle title="Why Choose Us?" subtitle="Our Advantages" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyChooseUsData.map((item, index) => (
          <motion.div 
            key={item.id}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="inline-block p-4 bg-brand-primary/10 rounded-full mb-4">
              <item.icon className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{item.title}</h3>
            <p className="text-brand-text text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
