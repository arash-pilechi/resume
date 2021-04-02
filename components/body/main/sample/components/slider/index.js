import { useState } from 'react';
import Image from 'next/image'
import {useTranslation} from 'next-i18next'
import Swiper from "react-id-swiper";
import Lightbox from 'react-image-lightbox';
import styles from './index.module.scss'

const Index = ({initialData,currentUser}) => {
    const params = {
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },*/
        lazy: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
    };
    const [photoIndex,setPhotoIndex] = useState(0);
    const [isOpen,setIsOpen] = useState(false);
    const {t} = useTranslation('samples');
    const openInLightBox = index => {
        setPhotoIndex(index);
        setIsOpen(true);
    }
    return(
        <div className={styles.slider}>
            <Swiper {...params}>
                {
                    initialData.images.map( (image,index) =>
                        <div className={styles.image}
                             onClick={() => openInLightBox(index)}
                             key={index}>
                            <Image src={`/images/users/${currentUser}/samples/${initialData.id}/${image.type}/${image.fileName}`}
                                   alt={t(`${currentUser}.samples.${initialData.id}.name`)}
                                   layout="fill"
                                   objectPosition="center"
                                   objectFit="contain"
                            />
                        </div>
                    )
                }
            </Swiper>
            {
                isOpen && (
                    <Lightbox
                        mainSrc={`/images/users/${currentUser}/samples/${initialData.id}/${initialData.images[photoIndex].type}/${initialData.images[photoIndex].fileName}`}
                        nextSrc={`/images/users/${currentUser}/samples/${initialData.id}/${initialData.images[photoIndex].type}/${initialData.images[(photoIndex + 1) % initialData.images.length].fileName}`}
                        prevSrc={`/images/users/${currentUser}/samples/${initialData.id}/${initialData.images[photoIndex].type}/${initialData.images[(photoIndex + initialData.images.length - 1) % initialData.images.length].fileName}`}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + initialData.images.length - 1) % initialData.images.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % initialData.images.length)}
                    />
                )
            }
        </div>
    )
}
export default Index