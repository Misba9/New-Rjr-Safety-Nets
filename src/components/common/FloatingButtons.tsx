import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const phoneNumber = "+64123456789";
  const whatsappMessage = "Hello, I'm interested in your safety net services.";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/8075051812?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-40">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Call Button */}
      <button
        onClick={handleCall}
        className="bg-brand-primary hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
        aria-label="Call us"
      >
        <Phone size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;