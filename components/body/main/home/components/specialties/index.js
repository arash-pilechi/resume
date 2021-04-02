import Link from 'next/link'
import {useTranslation} from 'next-i18next'
import Swiper from "react-id-swiper";
import SVG from '@/svg'
import styles from './index.module.scss'

const Index = ({initialData}) => {
    const {t} = useTranslation();
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
        <div className={styles.specialities}>
            <div className={styles.slider}>
                <Swiper {...params}>
                    {
                        Object.values(initialData).map( (speciality, index)  =>
                            <div className={styles.speciality} key={index}>
                                <div className={`${styles.icon} ${styles[speciality.icon.name]}`}
                                     title={speciality.text}>
                                    {SVG.dynamic(speciality.icon.name)}
                                </div>
                            </div>
                        )
                    }
                </Swiper>
            </div>
            <div className={styles.moreBox}>
                <Link href="/specialties">
                    <a>
                        <div className={styles.more}>
                            <div className={styles.text}>
                                <span>{t('home:see_specialities')}</span>
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