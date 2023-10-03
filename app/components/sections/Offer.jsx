//import Image from 'next/image';
import general from '@/app/general.module.css';
import Image from 'next/image';

export default function Offer({ changeLanguage, translations }){
    const handleLanguageChange = (newLanguage) => {
        // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
        changeLanguage(newLanguage);
    };

    return(
        <div id="offer" className={general.offer}>
            <h2 className={general.offerSubtitle}>{translations.offer.offerSubtitle}</h2>
            <h2 className={general.offerTitle}>{translations.offer.offerTitle}</h2>

            <div className={general.offerImgResponsiveContainer}>
                <Image src="/assets/img/como-lo-hacemos-responsive.png" 
                alt="Descripción de la imagen" 
                width={4} 
                height={3}
                layout="responsive"
                className={general.offerImgResponsive}/>
            </div>

            <div className={general.offerContainer}>
                <div className={general.offerBox} style={{borderBottom: `2px #F7A728 solid`}}>
                    <h2 className={general.offerBoxTitle}>{translations.offer.offerItems.offerItemOneTitleA} 
                    <br/>{translations.offer.offerItems.offerItemOneTitleB} </h2>

                    <span className={general.offerSeparator}></span>
                    <p className={general.OfferBoxDescription}>
                        <b>{translations.offer.offerItems.offerItemOneBoldText} </b> {translations.offer.offerItems.offerItemOneText} 
                    </p>
                </div>

                <div className={general.offerBox} style={{borderBottom: `2px #F7A728 solid`}}>
                    <h2 className={general.offerBoxTitle}>{translations.offer.offerItems.offerItemTwoTitleA} 
                    <br/>{translations.offer.offerItems.offerItemTwoTitleB}</h2>

                    <span className={general.offerSeparator}></span>
                    <p className={general.OfferBoxDescription}>
                        {translations.offer.offerItems.offerItemTwoText} <b> {translations.offer.offerItems.offerItemTwoBoldText} </b>
                    </p>
                </div>

                <div className={general.offerBox}>
                    <h2 className={general.offerBoxTitle}>{translations.offer.offerItems.offerItemThreeTitleA} 
                    <br/> {translations.offer.offerItems.offerItemThreeTitleB} </h2>

                    <span className={general.offerSeparator}></span>
                    <p className={general.OfferBoxDescription}>
                         {translations.offer.offerItems.offerItemThreeTextA} 
                         <b>{translations.offer.offerItems.offerItemThreeBoldText} </b> 
                         {translations.offer.offerItems.offerItemThreeTextB} 
                    </p>
                </div>
            </div>
        </div>
    );
}