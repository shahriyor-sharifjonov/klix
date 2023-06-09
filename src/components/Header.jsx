import styles from '@/styles/components/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

const Dropdown = () => {
    const [shown, setShown] = useState(false)
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
    
    const showMenu = {
        enter: {
            opacity: 1,
            y: 0,
            display: "block",
        },
        exit: {
            y: -5,
            opacity: 0,
            transitionEnd: {
                display: "none",
            },
        },
        up: {
            rotate: 180,
        },
        down: {
            rotate: 0,
        }
    }

    return (
        <>
            <motion.div
                variants={showMenu}
                initial="exit" 
                animate={shown ? "enter" : "exit"}
                className={styles.langOverlay} 
                onClick={() => {setShown(!shown)}}>
            </motion.div>
            <motion.div className={styles.lang} onClick={() => {setShown(!shown)}}>
                <span className={styles.langBtn}>
                    {locale === 'en' && (
                        <>
                            <Image src="/en.svg" alt="" width={18} height={18}/>
                            English
                        </>
                    )}
                    {locale === 'ru' && (
                        <>
                            <Image src="/ru.svg" alt="" width={18} height={18}/>
                            Русский
                        </>
                    )}
                    {locale === 'uz' && (
                        <>
                            <Image src="/uz.svg" alt="" width={18} height={18}/>
                            O&apos;zbekcha
                        </>
                    )}
                    <motion.svg
                        variants={showMenu}
                        initial="up"
                        animate={shown ? "up" : "down"} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.76877 0.23964C10.0771 0.55916 10.0771 1.0772 9.76877 1.39672L5.55824 5.76036C5.24993 6.07988 4.75007 6.07988 4.44176 5.76036L0.231232 1.39672C-0.0770772 1.0772 -0.0770772 0.55916 0.231231 0.23964C0.53954 -0.0798796 1.03941 -0.0798796 1.34772 0.23964L5 4.02473L8.65228 0.23964C8.96059 -0.07988 9.46046 -0.07988 9.76877 0.23964Z" fill="#626270"></path>
                    </motion.svg>
                </span>
                <motion.ul
                    variants={showMenu}
                    initial="exit" 
                    animate={shown ? "enter" : "exit"}
                    className={styles.langList}
                >
                    <button className={styles.langItem} onClick={() => {router.push(router.pathname, router.asPath, { locale: 'en', scroll: false })}}>
                        <Image src="/en.svg" alt="" width={18} height={18} draggable="false" />
                        English
                    </button>
                    <button className={styles.langItem} onClick={() => {router.push(router.pathname, router.asPath, { locale: 'ru', scroll: false })}}>
                        <Image src="/ru.svg" alt="" width={18} height={18} draggable="false" />
                        Русский
                    </button>
                    <button className={styles.langItem} onClick={() => {router.push(router.pathname, router.asPath, { locale: 'uz', scroll: false })}}>
                        <Image src="/uz.svg" alt="" width={18} height={18} draggable="false" />
                        O&apos;zbekcha
                    </button>
                </motion.ul>
            </motion.div>
        </>
    )
}

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
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
        <header className={styles.header}>
            <div className={`${styles.nav} container`}>
                <div className={styles.left}>
                    <Link href="/" className={styles.logo}>
                        <Image src="/logo.svg" alt="" width={76} height={56} draggable="false"/>
                    </Link>
                    <button type="button" onClick={() => {setMenuOpen(!menuOpen)}} className={`${styles.menuOverlay} ${menuOpen && styles.active}`}></button>
                    <div className={`${styles.menu} ${menuOpen && styles.active}`}>
                        <div className={styles.menuContent}>
                            <div className={`container ${styles.menuCon}`}>
                                <Link onClick={() => {setMenuOpen(!menuOpen)}} href="/" className={`${styles.menuItem} ${router.asPath === '/' && styles.active}`}>{t['For businesses']}</Link>
                                <Link onClick={() => {setMenuOpen(!menuOpen)}} href="/shoppers" className={`${styles.menuItem} ${router.asPath === '/shoppers' && styles.active}`}>{t['For shoppers']}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <Dropdown />
                    <Link href="/contact" className={`${styles.btn} btn`}>{t['Get started']}</Link>
                    <button type="button" onClick={() => {setMenuOpen(!menuOpen)}} className={`${styles.menuBtn} ${menuOpen && styles.active}`}>
                        <span className={styles.menuBtnLine}></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
