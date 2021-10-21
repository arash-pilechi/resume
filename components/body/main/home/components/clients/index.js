import Link from 'next/link'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'
import Swiper from 'react-id-swiper'
import SVG from '@/svg'
import styles from './index.module.scss'

const Index = ({currentUser}) => {
    const {t} = useTranslation();
    const counter = [];
    for(let i = 1; i <= 8; i++){
        counter.push(i);
    }
    const params = {
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },*/
        breakpoints: {
            1024: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    }
    return(
        <div className={styles.clients}>
            <div className={styles.slider}>
                <Swiper {...params}>
                    {
                        counter.map(item =>
                            <div className={styles.client} key={item}>
                                <Image src={`/images/users/${currentUser}/clients/${item}.png`}
                                       alt="img"
                                       width={50}
                                       height={50}
                                       objectFit="contain"
                                       objectPosition="center"
                                       layout="intrinsic"
                                />
                            </div>
                        )
                    }
                </Swiper>
            </div>
            <div className={styles.moreBox}>
                <Link href="/samples">
                    <a>
                        <div className={styles.more}>
                            <div className={styles.text}>
                                <span>{t('home:see_samples')}</span>
                            </div>
                            <div className={`${styles.icon} mirror`}>
                                {SVG.angle_left()}
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default Index