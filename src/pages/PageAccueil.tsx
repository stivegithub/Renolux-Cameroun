import React, { FunctionComponent } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Service from '../components/Service';
import img2 from '../../src/images/reno.png';
import TravauxStats from '../components/TravauxStats';
import Footer from '../components/Footer';
import Localisation from '../components/Localisation';

const PageAccueil: FunctionComponent = () => {
  return (
    <div className='bg-gray-400'>
      <Navbar images={img2} />
      <Carousel/>
    <Service/>
    <TravauxStats/>
    <Localisation/>
    <Footer/>
    </div>
  );
};

export default PageAccueil;
