'use client'

import Image from 'next/image'
import styles from './page.module.css'
//Componentes
import Translate from './components/template-parts/Translate';

export default function Home() {
  return (
    <main className={styles.main}>
        <Translate></Translate>
    </main>
  )
}
