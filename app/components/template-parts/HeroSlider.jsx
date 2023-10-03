//import Image from 'next/image';
'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import general from '@/app/general.module.css';
import Image from 'next/image';

const settings = {
  // Configura las opciones del slider según tus preferencias
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeroSlider = ({ changeLanguage, translations }) => {
  const handleLanguageChange = (newLanguage) => {
    // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
    changeLanguage(newLanguage);
  };

  return (
    <div className={general.slider}>
      <Slider {...settings}>
        <div>
          <div className={general.slideItem} 
          style={{backgroundImage: `url('/assets/img/scroll_1.png')`}}>
            <h2 className={general.slideItemDescription}>{translations.heroSlider.slideOne.textOne}
            <span style={{color: `#336DAA`}}>{translations.heroSlider.slideOne.textBold}</span>
            {translations.heroSlider.slideOne.textTwo}</h2>

            <div className={general.generalBtnContainer}>
              <a href="" className={general.slideItemBtnBlue}>{translations.heroSlider.slideOne.slideOneBtn}</a>
            </div>
            
          </div>
        </div>
        <div>
          <div className={general.slideSecondItem}
          style={{backgroundImage: `url('/assets/img/scroll_3.png')`}}>
            <h2 className={general.slideItemDescription}>
              {translations.heroSlider.slideTwo.textOne}
              <span style={{color: `#4DA9B5`}}> {translations.heroSlider.slideTwo.textBold} </span> 
              {translations.heroSlider.slideTwo.textTwo}
            </h2>

            <div className={general.generalBtnContainer}>
              <a href="" className={general.slideItemBtnBlueLight}>{translations.heroSlider.slideTwo.slideTwoBtn}</a>
            </div>

          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;