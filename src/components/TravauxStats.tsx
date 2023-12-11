// TravauxStats.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faSmile, faUsers } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const stats = [
  { icon: faTools, value: 15, label: 'Travaux réalisés' },
  { icon: faSmile, value: 15, label: 'Clients satisfaits' },
  { icon: faUsers, value: 0o3, label: 'Équipe dédiée' },
  // Ajoutez d'autres statistiques au besoin
];

const TravauxStats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100; // ajuste ce seuil selon tes besoins
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifie la visibilité initiale au chargement de la page

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex justify-around items-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: isVisible ? index * 0.2 : 0 }}
          className="text-center p-6 rounded-lg shadow-md bg-white border border-gray-300 hover:shadow-lg transition duration-300"
        >
          <div className="text-3xl font-bold text-blue-500">{stat.value}</div>
          <div className="text-sm text-gray-500">{stat.label}</div>
          <FontAwesomeIcon icon={stat.icon} className="text-4xl mt-4 text-blue-500" />
        </motion.div>
      ))}
    </div>
  );
};

export default TravauxStats;
