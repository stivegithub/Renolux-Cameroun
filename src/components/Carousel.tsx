import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from '../../src/images/1.jpg';
import img1 from '../../src/images/2.jpg';
import img3 from '../../src/images/3.jpg';
import img4 from '../../src/images/4.jpg';
import img5 from '../../src/images/5.jpg';
import img6 from '../../src/images/6.jpg';
import img7 from '../../src/images/7.jpg';
import img8 from '../../src/images/8.jpg';
import img9 from '../../src/images/9.jpg';






const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {/* Ajoutez vos images ici */}
        <div>
          <img className="w-full h-4/5" src={img1} alt="Domaine d'activité 1" />
        </div>
        <div>
          <img className="w-full h-screen" src={img2} alt="Domaine d'activité 2" />
        </div>
        <div>
          <img className="w-full h-screen" src={img3} alt="Domaine d'activité 1" />
        </div>
        <div>
          <img className="w-full h-screen" src={img4} alt="Domaine d'activité 2" />
        </div>
        <div>
          <img className="w-full h-screen" src={img5} alt="Domaine d'activité 1" />
        </div>
        <div>
          <img className="w-full h-screen" src={img6} alt="Domaine d'activité 2" />
        </div>
        <div>
          <img className="w-full h-screen" src={img7} alt="Domaine d'activité 1" />
        </div>
        <div>
          <img className="w-full h-screen" src={img8} alt="Domaine d'activité 2" />
        </div>
        <div>
          <img className="w-full h-screen" src={img9} alt="Domaine d'activité 2" />
        </div>
        {/* Ajoutez autant d'images que nécessaire */}
      </Slider>
    </div>
  );
};

export default Carousel;
