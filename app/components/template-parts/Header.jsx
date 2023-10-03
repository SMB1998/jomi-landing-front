import general from '@/app/general.module.css';
import Image from 'next/image';

export default function Header({ changeLanguage, translations }){
    const width = 150; // Ancho deseado
    const originalAspectRatio = 4 / 3; // Cambia esto según la relación de aspecto de tu imagen
    const height = width / originalAspectRatio; // Calcula la altura en función del ancho

    const handleLanguageChange = (newLanguage) => {
      // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
      changeLanguage(newLanguage);
    };

    return (  
        <header className={general.header}>
          <div className="logo-container">
            <a href="/" className="logo-link">
                <Image src="/assets/img/JOMI PNG.png" 
                alt="Descripción de la imagen" 
                width={width} 
                height={height}
                layout="responsive"
                className={general.logoImg}/>
            </a>
          </div>
          <nav className={general.menu}>
            <ul className={general.menuList}>
              <li className={general.menuItem}><a href="#">{translations.menu.itemOne}</a></li>
              <li className={general.menuItem}><a href="#">{translations.menu.itemTwo}</a></li>
              <li className={general.menuItem}><a href="#">{translations.menu.itemThree}</a></li>
              <li className={general.menuItem}><a href="#">{translations.menu.itemFour}</a></li>
            </ul>
          </nav>
          <div className={general.contactAndLanguageButtons}>
            <a href="/contacto" className={general.contactLink}>{translations.menu.contactBtn}</a>

            <button className="language-button"
            onClick={() => handleLanguageChange('en')}>EN</button>

            <button className="language-button"
            onClick={() => handleLanguageChange('es')}>ES</button>
          </div>
        </header>
    );
}