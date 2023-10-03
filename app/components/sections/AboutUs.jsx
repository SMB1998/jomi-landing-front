import Image from 'next/image';
import general from '@/app/general.module.css';

export default function AboutUs({ changeLanguage, translations }){
    const handleLanguageChange = (newLanguage) => {
        // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
        changeLanguage(newLanguage);
    };

    return(
        <div id="about" className={general.about}>
            <Image src="/assets/img/sobre-nosotros-img.png" 
                alt="Descripción de la imagen" 
                width={4} 
                height={3}
                layout="responsive"
                className={general.aboutImg}/>

            <div className={general.aboutContent}>
                <h2 className={general.aboutContentTitle}>{translations.about.aboutTitle} 
                <span style={{color: `#4AA2AE`}}>{translations.about.aboutTitleBold} </span></h2>

                <div className={general.aboutBox}>
                    <h2 className={general.aboutBoxTitle}>{translations.about.aboutBox.aboutBoxTitle}</h2>

                    <p className={general.aboutBoxDescription}>
                        {translations.about.aboutBox.aboutBoxDescriptionOne} 
                        <b>{translations.about.aboutBox.aboutBoxDescriptionBoldOne}</b>
                        {translations.about.aboutBox.aboutBoxDescriptionTwo}
                        <b>{translations.about.aboutBox.aboutBoxDescriptionBoldTwo}</b>
                        {translations.about.aboutBox.aboutBoxDescriptionThree}
                        <b>{translations.about.aboutBox.aboutBoxDescriptionBoldThree}</b>
                        {translations.about.aboutBox.aboutDescriptionFour}   
                    </p>
                </div>
            </div>
        </div>
    );
}