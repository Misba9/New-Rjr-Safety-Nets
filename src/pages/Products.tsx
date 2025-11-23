import PageBanner from '../components/layout/PageBanner';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../components/products/ProductCard';
import { services } from '../data/mockData';
import { useEffect } from 'react';
import { updateMetaTags, injectStructuredData, generateOrganizationSchema, generateSiteKeywords } from '../lib/seoUtils';

const Products = () => {
  useEffect(() => {
    const title = 'Safety Net Solutions in Bangalore | RJR Safety Nets';
    const description = 'Explore our range of safety net solutions in Bangalore including balcony safety nets, construction nets and pigeon protection. Professional installation by RJR Safety Nets.';
    updateMetaTags(title, description, generateSiteKeywords(), window.location.href, '/images/slider/construction-safety-nets.jpg');
    injectStructuredData(generateOrganizationSchema());
  }, []);
  return (
    <>
      <PageBanner title="Our Products" imageUrl="/images/slider/construction-safety-nets.jpg" />
      <Section>
        <SectionTitle title="All Safety Net Solutions" subtitle="Comprehensive Range" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ProductCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Products;
