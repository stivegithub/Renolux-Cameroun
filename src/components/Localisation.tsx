// Localisation.tsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Localisation: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Notre Localisation</h2>

      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="text-2xl mr-4" />
        <p>Yaoundé, Cameroun</p>
      </div>

      <div className="flex items-center mb-4">
        <FaPhone className="text-2xl mr-4" />
        <p>+237 691 098 037</p>
      </div>

      <div className="flex items-center mb-4">
        <FaEnvelope className="text-2xl mr-4" />
        <p>renolux3@gmail.com</p>
      </div>

      {/* Ajout des icônes et liens vers les réseaux sociaux */}
      <div className="flex items-center">
        <a href="https://www.facebook.com/profile.php?id=100084170042632&mibextid=hrBMPu" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 text-blue-600">
          <FaFacebook />
        </a>
        <a href="https://wa.me/message/WC73X73ZRMSHL1" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 text-green-600">
          <FaWhatsapp />
        </a>
        {/* Ajoutez d'autres liens vers les réseaux sociaux au besoin */}
        <a href="https://instagram.com/renolux_cameroun ?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 text-pink-600">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Localisation;
