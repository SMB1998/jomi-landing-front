'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import general from '@/app/general.module.css';
import Image from 'next/image';
import Testimonio from '../template-parts/Testimonio';

const settings = {
  // Configura las opciones del slider según tus preferencias
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // Este es un valor típico para dispositivos móviles, pero puedes ajustarlo según tus necesidades
      settings: {
        slidesToShow: 1, // Cambiar a 1 slide en dispositivos con un ancho de pantalla de 768px o menos
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Testimonios({ changeLanguage, translations }){
    const handleLanguageChange = (newLanguage) => {
        // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
        changeLanguage(newLanguage);
    };


    return(
        <div className={general.testimonios}>
            <h2 className={general.testimoniosSubtitle}>{translations.testimonios.testimoniosSubtitle}</h2>
            <h2 className={general.testimoniosTitle}>{translations.testimonios.testimoniosTitle}</h2>

            <Slider {...settings}>
                <div>
                    <Testimonio 
                        image="/assets/img/profile.JPG"
                        name="Testimonio 1"
                        position="CEO"
                        description="Me encantó el cumplimiento del cronograma planteado para el desarrollo de mi plataforma.
                        A pesar de haber presentado contratiempos, JOMI lograba cumplir las metas planteadas."
                        projectLink="https://www.bellapiel.com.co/"
                    />
                </div>
                <div>
                    <Testimonio 
                        image="/assets/img/profile.JPG"
                        name="Testimonio 2"
                        position="CEO"
                        description="Llevamos varios años trabajando de la mano y se han convertido en un aliado fundamental
                        para lograr los própositos de nuestras compañia. Muy agradecido de poder compartir proyectos con JOMI."
                        projectLink="https://www.bellapiel.com.co/"
                    />
                </div>

                <div>
                    <h1>Testimonio 3</h1>
                </div>
            </Slider>
        </div>
    );
}