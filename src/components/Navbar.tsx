import React, { FunctionComponent } from 'react';
import { AccountCircleRounded } from '@mui/icons-material';
import { useWith } from '../tools/dimension';
import { Link } from 'react-router-dom';
import Accueil from './Accueil';

type NavbarProps = {
  images: any;
};

const Navbar: FunctionComponent<NavbarProps> = ({ images }) => {
  const width = useWith();






  return (
    <>
      <div className="fixed w-screen top-0 z-50 bg-gray-800">
        <div className="flex lg:flex-row flex-col justify-between sm:px-7 px-3 py-2 text-lg bg-gray-800 text-white">
          {width <= 768 ? (
            // Afficher le menu déroulant sur les petits écrans
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={images} alt="" width="70px" height="30px" />
              </div>
              <div className="flex items-center">
               <div className=' animate-bounce'><Link to='/RendezVous'>Prendre rendez vous</Link></div>
              </div>
            </div>
          ) : (
            // Afficher les liens de navigation sur les grands écrans
            <>
              <div className="flex items-center">
                <img src={images} alt="" width="70px" height="30px" />
              </div>
              
              <div className="text-white">
                <AccountCircleRounded className="text-7xl" />
              </div>
            </>
          )}
        </div>
        {/* Sidebar pour les petits écrans */}
       
      </div>
      <div className=" mt-16 py-3 pt-5">
 <Accueil/>
</div>

    </>
  );
};

export default Navbar;
