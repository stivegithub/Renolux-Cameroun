/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FunctionComponent } from 'react';


type CardProps={
    photo:any;
    description:string;
    bouton:string;
    submit:()=>void;
    titre:string;
    redirection:string


}

const Card:FunctionComponent<CardProps> = ({photo, description, bouton, submit, titre, redirection}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mb-7">
      {/* Image de la carte */}
      <img
        className="object-cover w-full h-48"
        src={photo}
        alt="Description de la photo"
      />

      <div className="px-6 py-4">
        {/* Titre ou description courte */}
        <div className="font-bold text-xl mb-2 text-black">{titre}</div>

        {/* Description de la photo */}
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>

      
    </div>
  );
};

export default Card;
