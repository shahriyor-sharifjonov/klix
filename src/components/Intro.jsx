import React from 'react'
import styles from '@/styles/components/Intro.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

const Intro = () => {
    const router = useRouter()
    const { locale } = router 
    let t;
    if(locale === 'ru'){
        t = ru
    }else if(locale === 'uz'){
        t = uz
    }else if(locale === 'en'){
        t = en 
    }
    return (
        <section className={styles.intro}>
            <div className={`${styles.body} container`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{t['Intro title']}</h1>
                    <p className={styles.p}>{t['Intro desc']}</p>
                    <Link href="/contact" className={`btn ${styles.btn}`}>{t['Get started']}</Link>
                </div>
                <div className={styles.img}>
                    <Image src="/intro.png" alt="" width={344} height={525} draggable={false} />
                </div>
            </div>
        </section>
    )
}

export default Intro