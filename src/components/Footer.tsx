import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-300">&copy; {currentYear} Renolux Cameroun. Tous droits réservés.</p>
        </div>
        <div>
          <p className="text-gray-300">Réalisé par <span className="font-bold"><a href="http://digitalway.eno.cm" className='no-underline'>Digital way cameroun</a></span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
