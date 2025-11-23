import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const AboutSummary = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/images/about-new.jpg"
            alt="RJR Safety Nets team - Balcony Safety Nets Bangalore" 
            className="rounded-lg shadow-xl w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionTitle title="Welcome to RJR Safety Nets in Bangalore" subtitle="About Us" className="text-left mb-6" />
          <p className="text-brand-text mb-4">
            Welcome to RJR Safety Nets in Bangalore – your reliable source for top-quality Safety Nets Bangalore solutions. We offer a wide range of safety nets, including balcony nets, bird protection nets, construction nets, and more to safeguard your home, office, or industrial space. Our expert team ensures professional installation using durable, weather-resistant materials at affordable prices.
          </p>
          <p className="text-brand-text mb-8">
            With a commitment to safety and customer satisfaction, RJR Safety Nets stands out as a trusted name in the industry. Need immediate assistance? Call RJR SAFETY NETS now at +91 7075051812 or +91 8074514411 for fast and efficient service.
          </p>
          <Button asLink to="/about">Learn More</Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSummary;
