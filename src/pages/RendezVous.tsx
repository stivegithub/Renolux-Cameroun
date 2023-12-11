// RendezVous.tsx
import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

interface FormData {
  date: string;
  heure: string;
  nom: string;
  travaux: string;
}

const RendezVous: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    heure: '',
    nom: '',
    travaux: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoute ici la logique pour traiter les données du formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <>
      <div className="bg-white text-black p-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Programmer un rendez-vous</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="date" className="text-lg mb-2">
              <FaCalendarAlt className="mr-2 inline" /> Date du rendez-vous
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-2 border border-gray-300"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="heure" className="text-lg mb-2">
              <FaClock className="mr-2 inline" /> Heure du rendez-vous
            </label>
            <input
              type="time"
              id="heure"
              name="heure"
              value={formData.heure}
              onChange={handleChange}
              className="p-2 border border-gray-300"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="nom" className="text-lg mb-2">
              <FaUser className="mr-2 inline" /> Votre nom
            </label>
            <input
            placeholder='Entrez votre nom'
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="p-2 border border-gray-300"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="travaux" className="text-lg mb-2">
              Travaux à réaliser
            </label>
            <select
              id="travaux"
              name="travaux"
              value={formData.travaux}
              onChange={handleChange}
              className="p-2 border border-gray-300"
              required
            >
              <option value="">Sélectionner un type de travaux</option>
              <option value="placo_platre">Placo Plâtre</option>
              <option value="peinture">Peinture</option>
              <option value="enduit">Enduit</option>
              <option value="papier_peint">Papier Peint</option>
            </select>
          </div>

          <div className=' bg-green-500 rounded  hover:bg-green-600 text-white'>
          <button
            type="submit"
            className=" py-2 px-4 rounded transition duration-300"
          >
            Confirmer le rendez-vous
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RendezVous;
