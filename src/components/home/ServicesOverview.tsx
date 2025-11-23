import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../products/ProductCard';
import { services } from '../../data/mockData';
import Button from '../common/Button';

const ServicesOverview = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <Section className="bg-brand-light-gray">
      <SectionTitle title="Our Services" subtitle="What We Offer" />
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {featuredServices.map(service => (
          <ProductCard key={service.id} service={service} />
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <Button asLink to="/services" variant="secondary" className="text-sm sm:text-base">View All Services</Button>
      </div>
    </Section>
  );
};

export default ServicesOverview;