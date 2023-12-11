import React from 'react';
import { FaCoffee } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Accueil: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col  items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        Bienvenue sur Renolux Cameroun
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-lg mb-8 text-center"
      >
        Découvrez des designs modernes et des finitions innovantes pour vos projets.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
      >
        Explorer
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="mt-8 flex items-center"
      >
        <FaCoffee className="text-2xl mr-2" />
        <p>Renolux Cameroun</p>
      </motion.div>
    </div>
  );
};

export default Accueil;
