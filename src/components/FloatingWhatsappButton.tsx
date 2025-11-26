import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';


const WHATSAPP_NUMBER = "573147005575"; 

export const FloatingWhatsappButton = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola+Fibras+Montoya,+quisiera+solicitar+una+cotización+¿Me+pueden+brindar+más+información?`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
      style={{ 
        backgroundColor: '#25D366', 
        color: 'white', 
        
      }}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};