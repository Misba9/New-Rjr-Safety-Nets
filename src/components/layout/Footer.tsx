import { Link } from 'react-router-dom';
import { services } from '../../data/mockData';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const serviceLinks = services.slice(0, 5);

  return (
    <footer className="bg-brand-dark-blue text-gray-300">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Rjr<span className="text-brand-primary">Safety Nets</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              We are a leading provider of high-quality safety nets, committed to ensuring the safety and security of your homes and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-xs sm:text-sm hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-xs sm:text-sm hover:text-brand-primary transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-xs sm:text-sm hover:text-brand-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-xs sm:text-sm hover:text-brand-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(service => (
                <li key={service.id}>
                  <Link to="/services" className="text-xs sm:text-sm hover:text-brand-primary transition-colors">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="text-brand-primary mt-1 mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm">123 Safety Lane, Net City, Auckland 1010, New Zealand</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-brand-primary mr-2 flex-shrink-0" />
                <a href="tel:+64123456789" className="text-xs sm:text-sm hover:text-brand-primary transition-colors">70 75051812</a>  
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-brand-primary mr-2 flex-shrink-0" />
                <a href="mailto:info@anssafetynets.co.nz" className="text-xs sm:text-sm hover:text-brand-primary transition-colors">info@anssafetynets.co.nz</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rjr Safety Nets. All Rights Reserved. Designed by Ahmed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;