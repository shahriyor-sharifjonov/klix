import React, { useState } from 'react'
import styles from '@/styles/components/Fees.module.scss'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'
import Link from 'next/link'

const Fees = () => {
    const [btn, setBtn] = useState('1')
    const [active, setActive] = useState('')
    const [inactive, setInactive] = useState('')
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
        <div className={styles.fees}>
            <div className={`${styles.body} container`}>
                <h2 className={styles.title}>{t['Fees title']}</h2>
                <p className={styles.desc}>{t['Fees desc']}</p>
                <div className={styles.buttons}>
                    <button type="button" className={`${styles.button} ${btn === '1' ? styles.active : ''}`} onClick={() => {
                        setBtn('1'); 
                        document.querySelector('#fees-2').classList.remove(styles.show)
                        setTimeout(() => {document.querySelector('#fees-1').classList.add(styles.active);document.querySelector('#fees-2').classList.remove(styles.active)}, 150)
                        setTimeout(() => {document.querySelector('#fees-1').classList.add(styles.show)}, 300)
                    }}>{t['Fees btn 1']}</button>
                    <button type="button" className={`${styles.button} ${btn === '2' ? styles.active : ''}`} onClick={() => {
                        setBtn('2'); 
                        document.querySelector('#fees-1').classList.remove(styles.show)
                        setTimeout(() => {document.querySelector('#fees-2').classList.add(styles.active);document.querySelector('#fees-1').classList.remove(styles.active)}, 150)
                        setTimeout(() => {document.querySelector('#fees-2').classList.add(styles.show)}, 300)
                    }}>{t['Fees btn 2']}</button>
                </div>
                <div className={styles.content}>
                    <div className={`${styles.item} ${styles.active} ${styles.show}`} id="fees-1">
                        <p>item 1</p>
                        <p>item 1</p>
                    </div>
                    <div className={`${styles.item} ${styles.info}`} id="fees-2">
                        <p className={styles.infoP}>{t['Fees info']}</p>
                        <Link href="/contact" className={`${styles.button} ${styles.active}`}>{t['Fees info btn']}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fees
