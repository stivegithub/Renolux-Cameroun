/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, ChangeEvent } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { TiArrowBack } from 'react-icons/ti';

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ]);

  const handleImageAdd = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  const handleImageDelete = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className="bg-white p-4">
      <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-40 object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <button onClick={() => handleImageDelete(index)} className="text-white">
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center">
        <label htmlFor="fileInput" className="flex items-center p-2 bg-green-500 text-white rounded-full hover:bg-green-600 mr-2 cursor-pointer">
          <FaPlus className="mr-1" />
          Ajouter une image
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageAdd}
          />
        </label>
        <button className="flex items-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <TiArrowBack className="mr-1" />
          Retour
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
