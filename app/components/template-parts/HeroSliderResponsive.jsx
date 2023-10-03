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

const HeroSliderResponsive = ({ changeLanguage, translations }) => {
  const handleLanguageChange = (newLanguage) => {
    // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
    changeLanguage(newLanguage);
  };

  return (
    <div className={general.sliderResponsive}>
      <Slider {...settings}>
        <div>
          <div className={general.slideResponsiveItem}>

            <div className={general.slideResponsiveTextContainer}>
              <h2 className={general.slideItemDescription}>{translations.heroSlider.slideOne.textOne}
              <span style={{color: `#336DAA`}}>{translations.heroSlider.slideOne.textBold}</span>
              {translations.heroSlider.slideOne.textTwo}</h2>

              <div className={general.generalBtnContainer}>
                <a href="" className={general.slideItemBtnBlue}>{translations.heroSlider.slideOne.slideOneBtn}</a>
              </div>
            </div>

            <Image src="/assets/img/background-1-mobile.JPG" 
            alt="Descripción de la imagen" 
            width={4} 
            height={3}
            layout="responsive"
            className={general.slideResponsiveImg}/>
          </div>
        </div>

        <div>
            <div className={general.slideResponsiveItem}>
                <h2 className={general.slideItemDescription}>
                  {translations.heroSlider.slideTwo.textOne}
                  <span style={{color: `#4DA9B5`}}> {translations.heroSlider.slideTwo.textBold} </span> 
                  {translations.heroSlider.slideTwo.textTwo}
                </h2>

                <div className={general.generalBtnContainer}>
                  <a href="" className={general.slideItemBtnBlueLight}>{translations.heroSlider.slideTwo.slideTwoBtn}</a>
                </div>

                <Image src="/assets/img/slide_3_responsive.png" 
                alt="Descripción de la imagen" 
                width={4} 
                height={3}
                layout="responsive"
                className={general.slideResponsiveImgSecond}/>
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSliderResponsive;