import PageBanner from '../components/layout/PageBanner';
import Section from '../components/common/Section';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';
import { useEffect } from 'react';
import { updateMetaTags, generateOrganizationSchema, injectStructuredData, generateSiteKeywords } from '../lib/seoUtils';

const Contact = () => {
  useEffect(() => {
    // Set meta tags for the contact page
    const title = "Contact RJR Safety Nets | Safety Net Services in Bangalore";
    const description = "Get in touch with RJR Safety Nets, Bangalore's leading safety net service provider. Contact us for free consultation and quote on balcony safety nets, pigeon nets, invisible grills, and cloth hangers.";
    updateMetaTags(title, description, generateSiteKeywords(), window.location.href, '/images/pages/building-1.jpg');

    // Inject structured data
    const schema = generateOrganizationSchema();
    injectStructuredData(schema);
  }, []);

  return (
    <>
      <PageBanner title="Contact Us" imageUrl="/images/pages/building-1.jpg" />
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Get In Touch</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Contact Information</h2>
            <ContactDetails />
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">Our Location</h3>
              <img src="/images/pages/building-1.jpg" alt="Our Location" className="rounded-lg shadow-md w-full mb-4" />
              {/* Google Maps Embed Placeholder */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Google Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;