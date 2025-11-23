import Hero from '../components/home/Hero';
import AboutSummary from '../components/home/AboutSummary';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialSlider from '../components/home/TestimonialSlider';
import CtaBanner from '../components/home/CtaBanner';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { useEffect } from 'react';
import { updateMetaTags, generateOrganizationSchema, injectStructuredData, generateSiteKeywords } from '../lib/seoUtils';

const Home = () => {
  useEffect(() => {
    // Set meta tags for the home page
    const title = "Safety Nets Bangalore | Best Safety Net Dealers & Suppliers in Bangalore";
    const description = "Leading safety net service provider in Bangalore offering balcony safety nets, pigeon safety nets, invisible grills, and cloth hangers. Professional installation with competitive pricing.";
    const keywords = "Safety Nets Bangalore, Safety Net Dealers in Bangalore, Safety Net Suppliers in Bangalore, Balcony Safety Nets in Bangalore, Balcony Safety Nets Bangalore, Balcony Netting, Balcony Protection Net, Balcony Safety Net Installation, Balcony Safety Nets Price, Best pigeon safety nets in Bengaluru";
    
    updateMetaTags(title, description, generateSiteKeywords(), window.location.href, '/images/slider/balcony-safety-nets.jpg');

    // Inject structured data
    const schema = generateOrganizationSchema();
    injectStructuredData(schema);
  }, []);

  return (
    <>
      <Hero />
      <AboutSummary />
      <ServicesOverview />
      <WhyChooseUs />
      <Section className="bg-brand-light-gray">
        <SectionTitle title="Our Work" subtitle="Gallery" />
        <GalleryGrid />
      </Section>
      <TestimonialSlider />
      <CtaBanner />
    </>
  );
};

export default Home;