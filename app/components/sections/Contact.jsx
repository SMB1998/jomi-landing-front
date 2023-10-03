import Image from 'next/image';
import general from '@/app/general.module.css';

export default function Contact({ changeLanguage, translations }){
    const handleLanguageChange = (newLanguage) => {
        // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
        changeLanguage(newLanguage);
    };

    return(
        <div id="contact" className={general.contact}>
            <h2 className={general.servicesSubtitle}>{translations.contact.contactSubtitle}</h2>
            <h2 className={general.servicesTitle}>{translations.contact.contactTitle}</h2>

            <div className={general.contactContent}>
                <div className={general.contactDescription}>
                    <h2 className={general.contactDescriptionTitle}>{translations.contact.contactDescription.contactDescriptionBlack} <br/>
                    <span style={{color: `#336DAA`}}>{translations.contact.contactDescription.contactDescriptionBlue} </span></h2>

                    <p className={general.contactDescriptionText}>
                        {translations.contact.contactDescription.contactDescriptionTextA} 
                        <b>{translations.contact.contactDescription.contactDescriptionBoldTextA} </b>
                    </p>
                    <br/>
                    <p className={general.contactDescriptionText}>
                        {translations.contact.contactDescription.contactDescriptionTextB} 
                        <b>{translations.contact.contactDescription.contactDescriptionBoldTextB} </b>
                    </p>
                </div>

                <div className={general.contactForm}>
                    <div class={general.inputContainer}>
                        <input type="text" id="nombre" placeholder={translations.contact.contactPlaceholders.contactName}/>

                        <Image src="/assets/img/nombre.png" 
                        alt="Descripción de la imagen" 
                        width={4} 
                        height={3}
                        layout="responsive"
                        className={general.iconContact}/>
                    </div>

                    <div class={general.inputContainer}>
                        <input type="text" id="email" placeholder={translations.contact.contactPlaceholders.contactEmail}/>

                        <Image src="/assets/img/email.png" 
                        alt="Descripción de la imagen" 
                        width={4} 
                        height={3}
                        layout="responsive"
                        className={general.iconContact}/>
                    </div>

                    <div className={general.inputPhoneContainer}>
                        <div className={general.inputCodeContainer}>
                            <input type="text" id="code" placeholder="+"/>
                        </div>

                        <div className={general.inputNumberContainer}>
                            <input type="text" id="number" placeholder={translations.contact.contactPlaceholders.contactPhone}/>

                            <Image src="/assets/img/celular.png" 
                            alt="Descripción de la imagen" 
                            width={4} 
                            height={3}
                            layout="responsive"
                            className={general.iconContact}/>
                        </div>
                    </div>

                    <textarea name="mensaje" id="mensahe" cols="30" rows="10" 
                    className={general.messageBox} placeholder={translations.contact.contactPlaceholders.contactMessage}></textarea>

                    <button className={general.contactBtn}>{translations.contact.contactPlaceholders.contactBtn}</button>
                </div>
            </div>
        </div>
    );
}