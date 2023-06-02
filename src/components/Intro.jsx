import React from 'react'
import styles from '@/styles/components/Intro.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={`${styles.body} container`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Grow your sales and audience with Klix</h1>
                    <p className={styles.p}>Sell more by accepting payments via cards, bank accounts and buy now, pay later instalments. All via a single integration!</p>
                    <Link href="/contact" className={`btn ${styles.btn}`}>Get started</Link>
                </div>
                <div className={styles.img}>
                    <Image src="/intro.png" alt="" width={344} height={525} draggable={false} />
                </div>
            </div>
        </section>
    )
}

export default Intro
