// Contact.tsx
import React from 'react';
import { FaWhatsapp, FaFacebook, FaPhone, FaInstagram } from 'react-icons/fa';
import m1 from '../../src/images/loic.jpg'


const Contact: React.FC = () => {
  return (
   <>
    <section className=" bg-gray-600 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contactez-nous</h2>

        <div className="flex justify-center space-x-6">
          <ContactItem icon={<FaWhatsapp />} link="https://wa.me/message/WC73X73ZRMSHL1" />
          <ContactItem icon={<FaFacebook />} link="https://www.facebook.com/profile.php?id=100084170042632&mibextid=hrBMPu" />
          <ContactItem icon={<FaPhone />} link="tel:+237 691098037" />
          <ContactItem icon={<FaInstagram />} link="https://instagram.com/renolux_cameroun ?igshid=OGQ5ZDc2ODk2ZA==" />
        </div>
      </div>
      
    </section>
  
    <div className="lg:w-1/2 sm:p-4 sm:mt-8 lg:mt-0">
        <img src={m1} alt="Localisation"  />
      </div>
   </>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-4xl">
      {icon}
    </a>
  );
};

export default Contact;
