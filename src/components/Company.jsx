import React from 'react'
import styles from '@/styles/components/Company.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import uz from '@/locales/uz'
import ru from '@/locales/ru'
import en from '@/locales/en'

const Company = () => {
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
        <section className={styles.company}>
            <div className={`${styles.body} container`}>
                <h2 className={styles.title}>
                    {t['Company title 1']}
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="39" viewBox="0 0 55 39" fill="none" class="">
                        <path d="M8.61524 0.0223541C6.05296 0.43401 3.96056 2.08799 2.6317 4.74907C-0.128802 10.2844 0.480564 19.3335 4.08537 26.3538C7.59473 33.1829 13.637 37.6964 20.7365 38.7844C22.0433 38.9902 24.7524 39.0637 26.1033 38.9387C29.6494 38.6079 32.9091 37.6229 36.6608 35.7704C44.7734 31.7494 51.4398 25.3393 53.4367 19.6349C54.2223 17.3855 54.303 15.1581 53.6643 13.2616C53.2752 12.1075 52.7613 11.2768 51.961 10.5123C51.1241 9.72572 50.2063 9.19645 48.8775 8.76273C47.042 8.15995 44.9129 7.90266 40.6987 7.76299C34.3848 7.55717 33.4377 7.50571 31.081 7.24107C27.4322 6.82941 24.378 6.05755 21.5735 4.82258C20.5823 4.38887 19.694 3.89635 18.0494 2.88926C16.3608 1.84541 14.7603 1.05149 13.5195 0.632488C12.0365 0.139969 11.4859 0.037056 10.0836 0.00765228C9.40081 -0.00704956 8.74005 0.000297546 8.61524 0.0223541Z" fill="#0094FF"></path>
                        <path d="M25.9635 17.2384H30.9887V26.2179H28.8349V19.3564H25.9635V17.2384ZM24.2718 23.6062C23.9627 23.298 23.7889 22.88 23.7886 22.444V13.7864H21.6348V22.444C21.636 23.4494 22.0369 24.4133 22.7497 25.1242C23.4624 25.8352 24.4289 26.2351 25.4369 26.2363H27.1786V24.0885H25.4369C24.9998 24.088 24.5808 23.9145 24.2718 23.6062ZM20.3376 17.2371H17.707L13.8771 22.6825V13.7864H11.7235V26.0971H14.1056L16.2148 23.0978L18.3246 26.0971H20.9549L17.5303 21.2284L20.3376 17.2371ZM30.7304 13.6829C30.5054 13.4586 30.2071 13.3223 29.8898 13.299C29.5725 13.2757 29.2574 13.3668 29.0018 13.5559C28.7463 13.7449 28.5674 14.0192 28.4977 14.3288C28.428 14.6384 28.4721 14.9627 28.6221 15.2425C28.7721 15.5223 29.0179 15.7391 29.3148 15.8533C29.6116 15.9675 29.9397 15.9715 30.2392 15.8646C30.5388 15.7577 30.7899 15.547 30.9467 15.271C31.1035 14.9949 31.1557 14.6718 31.0936 14.3606C31.0424 14.1038 30.916 13.868 30.7304 13.6829ZM38.2148 21.6451L41.3142 17.2384H38.6839L36.8993 19.7751L35.1152 17.2384H32.4848L35.5843 21.6451L32.4572 26.0912H35.0877L36.8993 23.5154L38.7168 26.0984H41.3473L38.2148 21.6451Z" fill="white"></path>
                    </svg>
                    {t['Company title 2']}
                </h2>
                <div className={`${styles.item} ${styles.item1}`}>
                    <div className={styles.itemLeft}>
                        <p className={styles.itemTitle}>{t['Company item 1 title']}</p>
                        <p className={styles.itemP}>{t['Company item 1 desc']}</p>
                    </div>
                    <div className={styles.itemRight}>
                        <div className={styles.itemImg}>
                            <Image src="/company-1.png" alt="" width={412} height={369} draggable={false} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.item2}`}>
                    <div className={styles.itemRight}>
                        <div className={styles.itemImg}>
                            <Image src="/company-2.png" alt="" width={298} height={454} draggable={false} />
                        </div>
                    </div>
                    <div className={styles.itemLeft}>
                        <p className={styles.itemTitle}>{t['Company item 2 title']}</p>
                        <p className={styles.itemP}>{t['Company item 2 desc']}</p>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.item3}`}>
                    <div className={styles.itemLeft}>
                        <p className={styles.itemTitle}>{t['Company item 3 title']}</p>
                        <p className={styles.itemP}>{t['Company item 3 desc']}</p>
                    </div>
                    <div className={styles.itemRight}>
                        <div className={styles.itemImg}>
                            <Image src="/company-3.png" alt="" width={360} height={245} draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Company
