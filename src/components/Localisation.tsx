import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import img2 from '../../src/images/loic.jpg';

const Localisation: React.FC = () => {
  return (
<>
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

      <div className="mb-4">
        <iframe
          title="Localisation"
          className="w-full h-48 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158859.0344236147!2d11.49039546434694!3d3.8480311805636867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610b148868c2f5%3A0xc785d69f57bea051!2sYaound%C3%A9!5e0!3m2!1sen!2scm!4v1646094949387!5m2!1sen!2scm"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex items-center">
        <a href="https://www.facebook.com/profile.php?id=100084170042632&mibextid=hrBMPu" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 text-blue-600">
          <FaFacebook />
        </a>
        <a href="https://wa.me/message/WC73X73ZRMSHL1" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 text-green-600">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/renolux_cameroun?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4 text-pink-600">
          <FaInstagram />
        </a>
      </div>
    </div>
    <div> <img src={img2} alt="loic" /></div>
</>
  );
};

export default Localisation;
