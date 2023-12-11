import React, { FunctionComponent } from 'react'
import c1 from '../../src/images/a.jpg'
import c2 from '../../src/images/b.jpg'
import c3 from '../../src/images/c.jpg'
import Card from './Card'



const Service:FunctionComponent = () => {
  return (
    <div className=' bg-gray-700 p-5 sm:mt-7  '>
        <div className=' text-center font-bold text-white text-3xl'>Nos offres dans la decoration interieure de vos maison.</div>

        <div className='sm:flex sm:justify-between gap-7 mt-4 '>
            <Card photo={c1} redirection='/assistance-a-domicile' description='Nous vous offrons un service de placo plâtre de qualité superieure qui va du design, a la realisation dans les delais escomptés.' bouton='En savoir plus' submit={()=>{}}  titre='Placo plâtre'/>
            <Card photo={c2} redirection='/papa' description='Une autre facon de faire rayonner vos bureaux, si possible les transformer en lieux touristique , grace a notre equipe et a moindre cout.' bouton='En savoir plus' submit={()=>{}}  titre='Papier peint'/>
            <Card photo={c3} redirection='/maman' description=' Redonner a notre espace les couleurs qui les decrivent le mieux , faits par de professionnels et experimentés de Renolux Cameroun' bouton='En savoir plus' submit={()=>{}}  titre='Peinture & enduit '/>


        </div>

      
    </div>
  )
}

export default Service
