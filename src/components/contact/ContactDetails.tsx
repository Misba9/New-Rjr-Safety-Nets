import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactItems = [
  { icon: MapPin, text: '123 Safety Lane, Net City, Auckland 1010, New Zealand' },
  { icon: Phone, text: '70 7505 1812', href: 'tel:7075051812' },
  { icon: Mail, text: 'info@anssafetynets.co.nz', href: 'mailto:info@anssafetynets.co.nz' },
  { icon: Clock, text: '24/7 Customer Support' },
];

const ContactDetails = () => {
  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mr-4">
            <item.icon className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            {item.href ? (
              <a href={item.href} className="text-lg text-brand-text hover:text-brand-primary transition-colors">{item.text}</a>
            ) : (
              <p className="text-lg text-brand-text">{item.text}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
