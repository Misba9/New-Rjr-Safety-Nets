import PageBanner from '../../components/layout/PageBanner';
import Section from '../../components/common/Section';
import SectionTitle from '../../components/common/SectionTitle';
import CtaBanner from '../../components/home/CtaBanner';
import { useEffect } from 'react';

const InvisibleGrills = () => {
  useEffect(() => {
    document.title = 'Premium Invisible Grills in Bangalore | RJR Safety Nets';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Discover premium invisible grills in Bangalore for ultimate safety and aesthetics. Strong, durable invisible grill solutions for homes and apartments. Call +91 7075051812 or +91 8074514411.');
    const kw = document.querySelector('meta[name="keywords"]');
    if (kw) kw.setAttribute('content', 'Invisible Grills Bangalore, Invisible Grill Price Bangalore, Invisible Grill Installation, Invisible Grills for Windows, Invisible Grills for Balconies, Safety Grills Bangalore, Transparent Grills, Invisible Window Grill');
  }, []);

  return (
    <>
      <PageBanner title="Invisible Grills in Bangalore" imageUrl="/images/pages/balcony-02.jpg" />

      <Section>
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Invisible Grills in Bangalore</h1>
          <p className="text-lg text-gray-700 mb-4">
            Looking for premium invisible grills in Bangalore that combine security with aesthetics? Our cutting-edge invisible grill solutions offer robust protection without compromising on your home's appearance. Made from high-tensile steel cables with a transparent coating, these grills provide an unobstructed view while ensuring maximum safety for your family. Perfect for balconies, windows, and terraces in modern Bangalore homes.
          </p>
          <p className="text-lg text-gray-700 font-semibold mb-6">Call us now at <strong>+91 7075051812</strong> or <strong>+91 8074514411</strong> for a free consultation and installation.</p>

          <SectionTitle title="Why Choose RJR Safety Nets for Invisible Grills?" className="text-left" />

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality Materials</h3>
              <p className="text-gray-700">We use high-grade stainless steel cables with advanced polymer coating for maximum strength and corrosion resistance. Our invisible grills can withstand significant pressure while remaining virtually invisible to the naked eye.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-700">Our skilled technicians ensure precise measurement and flawless installation. We use specialized tools and techniques to create tensioned cable systems that provide optimal security without sagging or loosening over time.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-700">Get premium invisible grill solutions at competitive prices in Bangalore. We offer transparent pricing with no hidden costs, ensuring you receive exceptional value for your investment.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
              <p className="text-gray-700">Every space is unique, and we provide customized invisible grill designs to perfectly fit your windows, balconies, or other areas. Our experts assess your requirements and suggest the best configuration for your needs.</p>
            </div>
          </div>

          <SectionTitle title="Benefits of Invisible Grills" className="text-left" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Enhanced Security</h4>
              <p className="text-gray-700 mb-4">Invisible grills provide excellent protection against intruders while maintaining an open feel. The strong steel cables are nearly impossible to cut or break, offering reliable security for your home.</p>

              <h4 className="text-lg font-semibold mb-2">Unobstructed Views</h4>
              <p className="text-gray-700 mb-4">Unlike traditional grills, invisible grills maintain clear sightlines. Enjoy panoramic views from your balcony or window without any visual barriers, preserving the aesthetic appeal of your home.</p>

              <h4 className="text-lg font-semibold mb-2">Child Safety</h4>
              <p className="text-gray-700 mb-4">Protect your children from accidental falls with our invisible grill solutions. The closely spaced cables prevent small children from slipping through while allowing proper ventilation and natural light.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Low Maintenance</h4>
              <p className="text-gray-700 mb-4">Our invisible grills require minimal upkeep. The high-quality materials resist rust, corrosion, and weather damage, ensuring long-lasting performance with simple cleaning.</p>

              <h4 className="text-lg font-semibold mb-2">Modern Aesthetics</h4>
              <p className="text-gray-700 mb-4">Invisible grills complement contemporary architectural designs. They blend seamlessly with your home's exterior and interior, enhancing rather than detracting from its visual appeal.</p>

              <h4 className="text-lg font-semibold mb-2">Ventilation & Natural Light</h4>
              <p className="text-gray-700 mb-4">Enjoy unrestricted airflow and natural light with invisible grills. The open design allows fresh air and sunlight to enter your living spaces while maintaining security.</p>
            </div>
          </div>

          <SectionTitle title="Frequently Asked Questions" className="text-left" />
          <div className="space-y-4 mt-4">
            <div>
              <h5 className="font-semibold">1. What are invisible grills?</h5>
              <p className="text-gray-700">Invisible grills are security solutions made from thin, transparent steel cables stretched tightly across openings like windows and balconies. They provide robust protection while maintaining an unobstructed view.</p>
            </div>

            <div>
              <h5 className="font-semibold">2. How strong are invisible grills?</h5>
              <p className="text-gray-700">Our invisible grills use high-tensile steel cables capable of withstanding significant pressure. They offer excellent security against intruders and can prevent accidental falls, especially for homes with children.</p>
            </div>

            <div>
              <h5 className="font-semibold">3. Can invisible grills be installed on curved surfaces?</h5>
              <p className="text-gray-700">Yes, invisible grills can be adapted to various shapes and sizes, including curved or irregular surfaces. Our experts assess each installation site to provide the best solution for your specific requirements.</p>
            </div>

            <div>
              <h5 className="font-semibold">4. What is the price of invisible grills in Bangalore?</h5>
              <p className="text-gray-700">The invisible grill price in Bangalore varies based on factors like area, design complexity, and material quality. We offer competitive pricing with transparent quotations. Contact us for a personalized estimate.</p>
            </div>

            <div>
              <h5 className="font-semibold">5. How long does installation take?</h5>
              <p className="text-gray-700">Installation typically takes 2-4 hours depending on the size and complexity of the area. Our experienced team ensures quick and efficient installation with minimal disruption to your daily routine.</p>
            </div>

            <div>
              <h5 className="font-semibold">6. Do invisible grills require maintenance?</h5>
              <p className="text-gray-700">Invisible grills require minimal maintenance. Occasional cleaning with a damp cloth is sufficient to keep them looking new. The high-quality materials resist rust and corrosion, ensuring long-term durability.</p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
};

export default InvisibleGrills;