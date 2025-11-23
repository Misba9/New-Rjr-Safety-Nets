import PageBanner from '../../components/layout/PageBanner';
import Section from '../../components/common/Section';
import SectionTitle from '../../components/common/SectionTitle';
import CtaBanner from '../../components/home/CtaBanner';
import { useEffect } from 'react';
import { updateMetaTags, generateServiceSchema, injectStructuredData, generateSiteKeywords } from '../../lib/seoUtils';

const BalconySafetyNets = () => {
  useEffect(() => {
    const title = 'Best Balcony Safety Nets in Bangalore | RJR Safety Nets Expert';
    const description = 'Protect and keep your family with strong balcony safety nets in Bangalore. RJR Safety Nets ensures safe, long-lasting solutions for apartments and homes. Call us today.';
    updateMetaTags(title, description, generateSiteKeywords(), window.location.href, '/images/pages/balcony-02.jpg');
    const schema = generateServiceSchema({ name: 'Balcony Safety Nets', slug: 'balcony-safety-nets', description });
    injectStructuredData(schema);
  }, []);

  return (
    <>
      <PageBanner title="Balcony Safety Nets in Bangalore" imageUrl="/images/pages/balcony-02.jpg" />

      <Section>
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Balcony Safety Nets in Bangalore</h1>
          <p className="text-lg text-gray-700 mb-4">
            Looking for reliable balcony safety nets in Bangalore? Our high-quality nets provide strong protection for your loved ones, especially children and pets, from accidental falls and bird disturbances. Designed with durable, weather-resistant materials, our nets ensure safety without blocking your view or ventilation. Whether it's a high-rise apartment or a small balcony, we offer customised solutions to meet your needs. Our expert team handles professional installation with precision and care. Stay safe and worry-free at home with trusted balcony net solutions.
          </p>
          <p className="text-lg text-gray-700 font-semibold mb-6">Call us now at <strong>+91 7075051812</strong> or <strong>+91 8074514411</strong> for a free consultation and installation.</p>

          <SectionTitle title="Why Choose RJR Safety Nets for Balcony Safety Nets?" className="text-left" />

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Trained Technicians with Fast Installation</h3>
              <p className="text-gray-700">Our team includes well-trained professionals who ensure safe and quick installation. We respect your time and provide reliable balcony safety nets in Bangalore with minimal disruption to your daily routine.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">High-Quality, UV-Protected Nets</h3>
              <p className="text-gray-700">We use only premium, UV-stabilised materials that resist harsh sunlight and weather conditions. Our Balcony Protection Net Bangalore solutions ensure long-lasting durability while maintaining clear airflow and visibility without affecting your balcony’s aesthetics.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Affordable & Transparent Pricing</h3>
              <p className="text-gray-700">At RJR Safety Nets, we believe in honest, upfront pricing. Our balcony safety nets are priced competitively with no hidden charges, ensuring you get the best value in Bangalore.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Customised for Any Balcony Size or Shape</h3>
              <p className="text-gray-700">Every balcony is different, and we understand that. We provide tailor-made Balcony Safety Nets Bangalore to fit any size or shape, ensuring perfect coverage and maximum protection for your family.</p>
            </div>
          </div>

          <SectionTitle title="Benefits of Installing Balcony Safety Nets" className="text-left" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Child Safety</h4>
              <p className="text-gray-700 mb-4">Balcony safety nets provide a strong barrier to protect children from accidental falls. They allow kids to play freely near balconies without danger, making your home safer, especially in high-rise buildings and urban apartments.</p>

              <h4 className="text-lg font-semibold mb-2">Pet Protection</h4>
              <p className="text-gray-700 mb-4">Pets may attempt to fit through balcony rails because they are inherently curious. Our best Balcony Netting in Bangalore offers a strong, invisible barrier that prevents falls or escapes while letting your pets safely enjoy fresh air and outdoor views.</p>

              <h4 className="text-lg font-semibold mb-2">Unobstructed View</h4>
              <p className="text-gray-700 mb-4">These nets are designed with fine, transparent material that ensures safety without blocking your outside view. You can enjoy the scenery, light, and ventilation while staying protected at all times.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Weather Resistant & Durable</h4>
              <p className="text-gray-700 mb-4">Made from high-quality, UV-stabilized materials, balcony nets can withstand rain, sun, and strong winds. Their durability ensures long-term protection, reducing the need for frequent replacements or maintenance.</p>

              <h4 className="text-lg font-semibold mb-2">Pigeon Control</h4>
              <p className="text-gray-700 mb-4">Balcony safety nets also serve as an effective pigeon deterrent, keeping your space clean and hygienic. They stop birds from nesting or entering, preventing mess, noise, and health risks.</p>

              <h4 className="text-lg font-semibold mb-2">Peace of Mind</h4>
              <p className="text-gray-700 mb-4">Installing safety nets offers complete peace of mind. Whether you’re at home or away, you’ll feel confident knowing your loved ones and pets are safe on the balcony at all times.</p>
            </div>
          </div>

          <SectionTitle title="Frequently Asked Questions" className="text-left" />
          <div className="space-y-4 mt-4">
            <div>
              <h5 className="font-semibold">1. What are balcony safety nets?</h5>
              <p className="text-gray-700">Balcony safety nets are protective mesh structures designed to prevent accidental falls from balconies, especially in high-rise buildings. They are widely utilised in households with children, pets, or elderly folks to promote safety.</p>
            </div>

            <div>
              <h5 className="font-semibold">2. Why should I install a balcony safety net in Bangalore?</h5>
              <p className="text-gray-700">Bangalore has many high-rise apartments, and installing a safety net can help protect children, pets, or even objects from falling. It also keeps pigeons and other birds away from nesting in balcony areas.</p>
            </div>

            <div>
              <h5 className="font-semibold">3. Are balcony safety nets safe for children and pets?</h5>
              <p className="text-gray-700">Yes, balcony safety nets are specifically designed to protect both children and pets. The tightly woven mesh prevents small hands, feet, or paws from slipping through, creating a strong safety barrier. While safety is the top priority, many families also consider the Balcony Safety Nets Price, which is generally affordable and depends on the quality, size, and material of the net used.</p>
            </div>

            <div>
              <h5 className="font-semibold">4. Which type of net is best for balconies?</h5>
              <p className="text-gray-700">Nylon or high-grade polyethene nets are the most suitable for balconies. These materials are strong, weather-resistant, and durable. For added protection, UV-stabilised nets are recommended, especially in cities like Bangalore, where sun exposure can be intense. Always choose nets with good tensile strength and tight mesh gaps for better safety.</p>
            </div>

            <div>
              <h5 className="font-semibold">5. Does the price include installation and accessories?</h5>
              <p className="text-gray-700">At RJR Safety Nets, the price per sq. ft usually includes the net, installation labor, hooks, rope, and support accessories. Always confirm in the quotation.</p>
            </div>

            <div>
              <h5 className="font-semibold">6. Is a site inspection required before installation?</h5>
              <p className="text-gray-700">Yes, a site inspection is an important step before Balcony Safety Net Installation in Bangalore. It allows the technicians to evaluate your balcony’s layout, take accurate measurements, and recommend the most suitable type of net. A proper inspection ensures a safe and secure installation. Many service providers in Bangalore offer this inspection free of cost as part of their customer service.</p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
};

export default BalconySafetyNets;
