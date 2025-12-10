import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '919820120240'; // WhatsApp number without '+' and spaces
  const message = 'Hello! I would like to know more about your services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </Link>
    </div>
  );
}
