import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faSmile, faUsers } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const stats = [
  { icon: faTools, value: 15, label: 'Travaux réalisés' },
  { icon: faSmile, value: 15, label: 'Clients satisfaits' },
  { icon: faUsers, value: 3, label: 'Équipe dédiée' },
  // Ajoutez d'autres statistiques au besoin
];

const TravauxStats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (



  <div className="bg-white flex flex-wrap justify-around items-center pb-8 ">
    <h2 className="text-4xl font-bold">Statistiques</h2>
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 1, y: 50 }}
        animate={isVisible ? { opacity: 0, y: 0 } : {}}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className="text-center p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-md bg-blue-100 hover:bg-blue-200 transition duration-300 m-4"
      >
        <div className="text-3xl font-bold text-blue-500">{stat.value}</div>
        <div className="text-sm text-gray-700">{stat.label}</div>
        <FontAwesomeIcon icon={stat.icon} className="text-4xl mt-1 text-blue-500" />
      </motion.div>
    ))}
  </div>
);

// ...

};

export default TravauxStats;
