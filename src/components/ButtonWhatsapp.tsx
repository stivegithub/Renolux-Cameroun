import React from 'react';

interface WhatsappButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className=''>
      Envoyer sur WhatsApp
    </a>
  );
};

export default WhatsappButton;
