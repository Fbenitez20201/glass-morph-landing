
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <a
        href="https://wa.me/+50364554356"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-105 animate-scale-in"
      >
        <MessageCircle className="text-white" size={28} />
      </a>
    </div>
  );
};

export default WhatsappButton;
