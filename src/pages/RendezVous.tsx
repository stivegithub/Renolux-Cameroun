import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope } from 'react-icons/fa';
import { Client, ClientOptions } from 'whatsapp-web.js';

interface FormData {
  date: string;
  heure: string;
  prenom: string;
  travaux: string;
  email: string;
}

const RendezVous: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    heure: '',
    prenom: '',
    travaux: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('tout va bien');

    try {
      // Supposons que le numéro de téléphone soit le suivant  691098037
      const phoneNumber = '658182157';
      const message = `Nouveau rendez-vous!\nDate: ${formData.date}\nHeure: ${formData.heure}\nNom: ${formData.prenom}\nTravaux: ${formData.travaux}\nEmail: ${formData.email}`;

      // Créez un objet ClientOptions
      const clientOptions: ClientOptions = {
        session: undefined, // Peut être défini si vous souhaitez maintenir une session persistante
      };

      // Créez un client WhatsApp avec les options
      const client = new Client(clientOptions);

      // Attendez que le client se connecte
      await client.initialize();

      // Envoyez le message WhatsApp
      await client.sendMessage(`${phoneNumber}@c.us`, message);

      console.log('Message envoyé avec succès sur WhatsApp');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'envoi du message WhatsApp:', error);
    }
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
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="p-2 border border-gray-300"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">
              <FaEnvelope className="mr-2 inline" /> Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300"
              placeholder="Entrez votre adresse e-mail"
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
      </div>    </>
  );
};

export default RendezVous;
