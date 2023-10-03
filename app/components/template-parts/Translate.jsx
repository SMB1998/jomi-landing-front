import React, { useState } from 'react';
import Header from '../template-parts/Header';
import HeroSlider from '../template-parts/HeroSlider';
import HeroSliderResponsive from '../template-parts/HeroSliderResponsive';
import Services from '../sections/Services';
import AboutUs from '../sections/AboutUs';
import Offer from '../sections/Offer';
import Testimonios from '../sections/Testimonios';
import Contact from '../sections/Contact';
import Footer from '../template-parts/Footer';

const Translate = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  const translations = {
    en: {
      menu: {
        itemOne: 'Who are us?',
        itemTwo: 'What do we do?',
        itemThree: 'How do we do it?',
        itemFour: 'Success cases?',
        contactBtn: 'Contact'
      },

      heroSlider: {
        slideOne: {
            textOne: 'We create value propositions that ',
            textBold: 'revolutionizing ',
            textTwo: 'the way companies operate',
            slideOneBtn: 'Learn more'
        },

        slideTwo: {
            textOne: 'We build ',
            textBold: 'custom solutions, ',
            textTwo: 'that fit your needs',
            slideTwoBtn: 'Learn more'
        }
      },

      about: {
        aboutTitle: 'About ',
        aboutTitleBold: 'Us',
  
        aboutBox: {
          aboutBoxTitle: 'Hello,',
  
          aboutBoxDescriptionOne: 'We are a ',
          aboutBoxDescriptionBoldOne: 'STARTUP ', 
          aboutBoxDescriptionTwo: 'focused on ',
          aboutBoxDescriptionBoldTwo: 'help businesses reach their full potential ',  
          aboutBoxDescriptionThree: 'through ',
          aboutBoxDescriptionBoldThree: 'technological solutions and innovative digital tools ', 
          aboutDescriptionFour: 'that enhance your organizational processes and objectives'
        }
      },

      services: {
        servicesTitle: 'Services',
        servicesSubtitle: 'What do we do?',

        serviceOne: {
            serviceTitle: 'DEVELOP',
            serviceDescription: 'We build tailor-made tech solutions that perfectly fit each company\'s needs.'
        },
    
        serviceTwo: {
            serviceTitle: 'INNOVATE',
            serviceDescription: 'We create value propositions that revolutionize how businesses operate and achieve results.'
        },
    
        serviceThree: {
            serviceTitle: 'ACCELERATE',
            serviceDescription: 'We help companies achieve significant results by optimizing their processes and improving performance.'
        },

        servicesBtn: 'Learn more'
      },

      offer: {
        offerTitle: 'HOW DO WE DO IT?',
        offerSubtitle: 'Our value offer',
  
        offerItems: {
          offerItemOneTitleA: 'Equipment',
          offerItemOneTitleB: 'Multidisciplinary',
          offerItemOneBoldText: 'Experts in technology, design, marketing and business,',
          offerItemOneText: ' which allows us to create solutions at another level.',
          offerItemTwoTitleA: 'Focused design',
          offerItemTwoTitleB: 'in the customer',
          offerItemTwoText: 'Close collaboration with our clients to ',
          offerItemTwoBoldText: 'understand your needs and offer solutions adapted to your objectives.',
          offerItemThreeTitleA: 'Approach',
          offerItemThreeTitleB: 'Methodological',
          offerItemThreeTextA: 'We use methodologies such as ',
          offerItemThreeBoldText: 'design thinking, agile, lean startup, ',
          offerItemThreeTextB: 'among others; which allows us to work efficiently and effectively.'
        }
      },

      testimonios: {
        testimoniosTitle: 'Our customers',
        testimoniosSubtitle: 'SUCCESS STORIES'
      },

      contact: {
        contactTitle: 'Contact us',
        contactSubtitle: 'JOMI',

        contactDescription: {
          contactDescriptionBlack: "Let's work",
          contactDescriptionBlue: 'TOGETHER',
          contactDescriptionTextA: "If you're here, it's time to ",
          contactDescriptionBoldTextA: 'emprender un emocionante viaje juntos.',
          contactDescriptionTextB: 'Go on an exciting journey together. ',
          contactDescriptionBoldTextB: 'We look forward to starting this adventure with you!'
        },

        contactPlaceholders: {
          contactName: 'Name',
          contactEmail: 'Email',
          contactPhone: 'Phone',
          contactMessage: 'Message',
          contactBtn: 'Send'
        }
      },

      footer:{
        copyrightFor: 'Copyright 2023 by',
        copyrightText: 'All rights reserved.',

        contactFooter: {
          contactFooterTitle: 'CONTACT US',
        }
      }
    },
    es: {
      menu: {
        itemOne: '¿Quiénes somos?',
        itemTwo: '¿Qué hacemos?',
        itemThree: '¿Cómo lo hacemos?',
        itemFour: '¿Casos de éxito?',
        contactBtn: 'Contacto'
      },

      heroSlider: {
        slideOne: {
            textOne: 'Creamos propuestas de valor que ',
            textBold: 'revolucionan ',
            textTwo: 'la forma en la que las empresas operan',
            slideOneBtn: 'Conoce más'
        }, 

        slideTwo: {
            textOne: 'Construimos ',
            textBold: 'soluciones a la medida, ',
            textTwo: 'que se adaptan a tus necesidades',
            slideTwoBtn: 'Conoce más'
        }
    },

      about: {
        aboutTitle: 'Sobre ',
        aboutTitleBold: 'Nosotros',

        aboutBox: {
          aboutBoxTitle: 'Hola,',

          aboutBoxDescriptionOne: 'Somos una ',
          aboutBoxDescriptionBoldOne: 'STARTUP ', 
          aboutBoxDescriptionTwo: 'enfocada en ',
          aboutBoxDescriptionBoldTwo: 'ayudar a las empresas a alcanzar su máximo potencial ',  
          aboutBoxDescriptionThree: 'mediante ',
          aboutBoxDescriptionBoldThree: 'soluciones tecnológicas y herramientas digitales innovadoras ', 
          aboutDescriptionFour: 'que potencian sus procesos y objetivos organizacionales'
        }
      },

      services: {
          servicesTitle: 'Servicios',
          servicesSubtitle: '¿Qué hacemos?',

          serviceOne: {
              serviceTitle: 'DESARROLLAMOS',
              serviceDescription: 'Construimos soluciones tech a la medida que se adaptan perfectamente a las necesidades de cada empresa.'
          },

          serviceTwo: {
              serviceTitle: 'INNOVAMOS',
              serviceDescription: 'Creamos propuestas de valor que revolucionan la forma en que las empresas operan y logran resultados.'
          },

          serviceThree: {
              serviceTitle: 'ACELERAMOS',
              serviceDescription: 'Ayudamos a las empresas a lograr resultados significativos, optimizando sus procesos y mejorando su rendimiento.'
          },

          servicesBtn: 'Conoce más'
      },

      offer: {
        offerTitle: 'Nuestra oferta de valor',
        offerSubtitle: '¿CÓMO LO HACEMOS?',

        offerItems: {
          offerItemOneTitleA: 'Equipo',
          offerItemOneTitleB: 'Multidisciplinar',
          offerItemOneBoldText: 'Expertos en tecnología, diseño, marketing y negocio, ',
          offerItemOneText: ' que nos permite crear soluciones a otro nivel.',
          offerItemTwoTitleA: 'Diseño centrado',
          offerItemTwoTitleB: 'en el cliente',
          offerItemTwoText: 'Colaboración estrecha con nuestros clientes para ',
          offerItemTwoBoldText: 'entender sus necesidades y ofrecer soluciones adaptadas a sus objetivos.',
          offerItemThreeTitleA: 'Enfoque',
          offerItemThreeTitleB: 'Metodológico',
          offerItemThreeTextA: 'Utilizamos metodologías como ',
          offerItemThreeBoldText: 'design thinking, agile, lean startup, ',
          offerItemThreeTextB: 'entre otras; que nos permite trabajar de manera eficiente y efectiva.'
        }
      },

      testimonios: {
        testimoniosTitle: 'Nuestros clientes',
        testimoniosSubtitle: 'CASOS DE ÉXITO'
      },

      contact: {
        contactTitle: 'Contáctanos',
        contactSubtitle: 'JOMI',

        contactDescription: {
          contactDescriptionBlack: 'Trabajemos',
          contactDescriptionBlue: 'JUNTOS',
          contactDescriptionTextA: 'Si estás aquí, es hora de ',
          contactDescriptionBoldTextA: 'emprender un emocionante viaje juntos.',
          contactDescriptionTextB: 'Transformaremos tus ideas en realiades digitales sorprendentes ',
          contactDescriptionBoldTextB: '¡Esperamos con entusiasmo comenzar esta aventura contigo!'
        },

        contactPlaceholders: {
          contactName: 'Nombre',
          contactEmail: 'Email',
          contactPhone: 'Número de telefono',
          contactMessage: 'Mensaje',
          contactBtn: 'Enviar'
        }
      },

      footer:{
        copyrightFor: 'Copyright 2023 por',
        copyrightText: 'Todos los derechos reservados.',

        contactFooter: {
          contactFooterTitle: 'CONTÁCTANOS',
        }
      }
    },
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang)
  };

  return (
    <div>
        <Header 
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>

        <HeroSlider
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>

        <HeroSliderResponsive
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>

        <AboutUs
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>

        <Services
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>

        <Offer
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>

        <Testimonios
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>

        <Contact
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>

        <Footer
        changeLanguage={changeLanguage}
        translations={translations[currentLanguage]}/>
    </div>
  );
};

export default Translate;
