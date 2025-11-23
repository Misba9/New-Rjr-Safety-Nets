import PageBanner from '../components/layout/PageBanner';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { stats } from '../data/mockData';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { updateMetaTags, generateOrganizationSchema, injectStructuredData, generateSiteKeywords } from '../lib/seoUtils';

const About = () => {
  useEffect(() => {
    // Set meta tags for the about page
    const title = "About RJR Safety Nets | Leading Safety Net Provider in Bangalore";
    const description = "Learn about RJR Safety Nets, Bangalore's trusted provider of high-quality safety nets for residential, commercial, and industrial applications. With over 10 years of experience, we offer expert installation services.";
    updateMetaTags(title, description, generateSiteKeywords(), window.location.href, '/images/about-new.jpg');

    // Inject structured data
    const schema = generateOrganizationSchema();
    injectStructuredData(schema);
  }, []);

  return (
    <>
      <PageBanner title="About Us" imageUrl="/images/about-new.jpg" />
      
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle title="Our Company" className="text-left mb-6" />
            <p className="text-brand-text mb-4">
              Rjr Safety Nets is a leading provider of high-quality safety solutions across Bangalore. We specialize in a wide range of netting services for residential, commercial, and industrial applications.
            </p>
            <h3 className="text-2xl font-bold text-brand-dark-blue mt-8 mb-4">Our Mission</h3>
            <p className="text-brand-text mb-4">
              To provide our clients with the most reliable and effective safety solutions, ensuring peace of mind through superior services and expert installation.
            </p>
            <h3 className="text-2xl font-bold text-brand-dark-blue mt-8 mb-4">Our Vision</h3>
            <p className="text-brand-text">
              To be the most trusted name in safety netting, recognized for our commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>
          <div>
            <img 
              src="/images/about-new.jpg"
              alt="RJR Safety Nets team - Balcony Safety Nets Bangalore" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-brand-dark-blue text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-primary">{stat.value}</div>
              <div className="text-lg text-gray-300 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <WhyChooseUs />
    </>
  );
};

export default About;