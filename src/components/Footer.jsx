import React from 'react'
import styles from '@/styles/components/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

const Footer = () => {
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
        <footer className={styles.footer}>
            <div className={`${styles.body} container`}>
                <div className={styles.col}>
                    <Link href="/" className={styles.logo}>
                        <Image src="/logo.svg" alt="" width={76} height={56} draggable="false"/>
                    </Link>
                    <p className={styles.copy}>© 2023 Klix. All rights reserved</p>
                </div>
                <div className={styles.col}>
                    <p className={styles.title}>Company</p>
                    <Link href="#" className={styles.link}>Privacy settings</Link>
                </div>
                <div className={styles.col}>
                    <p className={styles.title}>For businesses</p>
                    <Link href="/contact" className={styles.link}>Get in touch</Link>
                    <Link href="#" className={styles.link}>Developer documentation</Link>
                </div>
                <div className={styles.col}>
                    <p className={styles.title}>For shoppers</p>
                    <Link href="#" className={styles.link}>Legal Information</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
