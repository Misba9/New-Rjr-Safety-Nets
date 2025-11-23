import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-brand-dark-blue">
            RJR<span className="text-brand-primary">Safety Nets</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'font-medium text-brand-dark-blue hover:text-brand-primary transition-colors text-sm xl:text-base hover:underline hover:decoration-brand-primary hover:underline-offset-4',
                    isActive ? 'text-brand-primary' : ''
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a href="tel:+64123456789" className="flex items-center font-semibold text-brand-dark-blue hover:text-brand-primary transition-colors text-sm">
              <Phone size={16} className="mr-2 text-brand-primary" />
              <span className="hidden xl:inline">70 7505 1812</span>
              <span className="xl:hidden">Call</span>
            </a>
            <Link to="/contact" className="bg-brand-primary text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 text-sm">
              Get Quote
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark-blue">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50 overflow-auto">
          <nav className="flex flex-col items-center space-y-6 py-8 px-6 max-w-md mx-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'font-medium text-brand-dark-blue hover:text-brand-primary transition-colors text-lg hover:underline hover:decoration-brand-primary hover:underline-offset-4',
                    isActive ? 'text-brand-primary' : ''
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a href="tel:+64123456789" className="flex items-center font-semibold text-brand-dark-blue hover:text-brand-primary transition-colors pt-4">
              <Phone size={18} className="mr-2 text-brand-primary" />
              70 7505 1812
            </a>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors mt-4 w-full text-center">
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;