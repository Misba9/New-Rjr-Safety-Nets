import { useParams } from 'react-router-dom';
import { services } from '../data/mockData';
import PageBanner from '../components/layout/PageBanner';
import Section from '../components/common/Section';
import CtaBanner from '../components/home/CtaBanner';
import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { updateMetaTags, generateServiceSchema, injectStructuredData, generateSiteKeywords } from '../lib/seoUtils';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    if (service) {
      // Set meta tags for the service detail page
      const title = `${service.name} in Bangalore | RJR Safety Nets`;
      const description = `Professional ${service.name.toLowerCase()} installation in Bangalore. High-quality materials, expert installation, and competitive pricing. Call for a free consultation.`;
      const keywords = generateSiteKeywords();
      updateMetaTags(title, description, keywords, window.location.href, service.bannerImage || service.imageUrl || '/images/pages/balcony-02.jpg');

      // Inject structured data
      const schema = generateServiceSchema({ name: service.name, slug: service.slug, description: service.shortDescription, image: service.imageUrl, url: window.location.href });
      injectStructuredData(schema);
    }
  }, [service]);

  if (!service) {
    return (
      <Section>
        <h1 className="text-center text-3xl font-bold">Service not found</h1>
      </Section>
    );
  }

  return (
    <>
      <PageBanner title={service.name} imageUrl={service.bannerImage} />
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">About {service.name}</h2>
            <p className="text-brand-text mb-6">{service.longDescription}</p>
            
            {service.contentSections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-2xl font-bold text-brand-dark-blue mb-3">{section.title}</h3>
                <p className="text-brand-text">{section.text}</p>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-brand-light-gray p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
                <img src={service.imageUrl} alt={service.name} className="rounded-lg shadow-xl w-full"/>
            </div>
          </aside>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
};

export default ServiceDetail;