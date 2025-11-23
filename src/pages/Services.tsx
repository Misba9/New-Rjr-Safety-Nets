import PageBanner from '../components/layout/PageBanner';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../components/products/ProductCard';
import { services } from '../data/mockData';
import { useEffect } from 'react';
import { updateMetaTags, generateOrganizationSchema, injectStructuredData, generateSiteKeywords } from '../lib/seoUtils';

const Services = () => {
  useEffect(() => {
    // Set meta tags for the services page
    const title = "All Safety Net Services in Bangalore | RJR Safety Nets";
    const description = "Explore our comprehensive range of safety net services in Bangalore including balcony safety nets, pigeon safety nets, invisible grills, cloth hangers, and more. Professional installation with warranty.";
    updateMetaTags(title, description, generateSiteKeywords(), window.location.href, '/images/slider/construction-safety-nets.jpg');
    // Inject organization structured data
    const schema = generateOrganizationSchema();
    injectStructuredData(schema);
  }, []);

  return (
    <>
      <PageBanner title="Our Services" imageUrl="/images/slider/construction-safety-nets.jpg" />
      <Section>
        <SectionTitle title="All Safety Net Solutions" subtitle="Comprehensive Range" />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map(service => (
            <ProductCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;