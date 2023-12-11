import React, { FunctionComponent, useState, useEffect } from 'react';
import { AccountCircleRounded, DehazeRounded } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import { useWith } from '../tools/dimension';
import { Link } from 'react-router-dom';

type NavbarProps = {
  images: any;
};

const Navbar: FunctionComponent<NavbarProps> = ({ images }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const width = useWith();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Fermer le sidebar lorsqu'on passe d'un grand écran à un petit écran
    if (width > 768) {
      setSidebarOpen(false);
    }
  }, [width]);

  const navItems = ['Accueil', 'A propos', 'Divertissement', 'Contact'];

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
              <div className="flex gap-4">
                {navItems.map((item) => (
                  <div
                    key={item}
                    className="cursor-pointer hover:text-blue-300 hover:bg-gray-700 p-2 rounded-lg hover:border-blue-400 hover:border-b-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-white">
                <AccountCircleRounded className="text-7xl" />
              </div>
            </>
          )}
        </div>
        {/* Sidebar pour les petits écrans */}
        {width <= 768 && isSidebarOpen && (
          <div className="bg-gray-900 p-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item} className="cursor-pointer hover:text-blue-300 hover:bg-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="text-2xl text-justify pt-2 px-3 bg-white text-blue-500 mt-16 py-3 pt-5">
  <span className=' text-black'>Design</span> moderne, <span className=' text-black'>finition</span> innovante <span className=' text-black'>c'est</span> {' '}
  <span className="text-black cursor-pointer text-2xl font-bold border-b-2 border-gray-600 bg-gray-100 hover:bg-gray-200 rounded-sm px-2 py-1 transition duration-300">
    Renolux Cameroun
  </span>
</div>

    </>
  );
};

export default Navbar;
