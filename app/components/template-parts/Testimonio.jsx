import React from 'react';
import general from '@/app/general.module.css';
import Image from 'next/image';

const Testimonio = ({ image, name, position, description, projectLink }) => {
  return (
    <div className={general.testimonioCard}>
        <Image src={image} 
        alt={name}
        width={4} 
        height={3}
        layout="responsive"
        className={general.testimonioImageCard}/>

        <h2 className={general.testimonioNameCard}>{name}</h2>
        <p className={general.testimonioPositionCard}>{position}</p>
        <p className={general.testimonioDescriptionCard}>{description}</p>
        <a href={projectLink} className={general.testimonioLinkCard}>Ver proyecto</a>
    </div>
  );
};

export default Testimonio;
