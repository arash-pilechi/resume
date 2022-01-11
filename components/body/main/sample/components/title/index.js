import Image from "next/image"
import {useTranslation} from 'next-i18next'
import styles from './index.module.scss'

const Index = ({initialData,currentUser,status}) => {
    const {t} = useTranslation('samples');
    return(
        <div className={styles.title}>
            <div className={styles.logo}>
                <Image src={`/images/users/${currentUser}/samples/${initialData.id}/logo.png`}
                       alt="img"
                       width={40}
                       height={40}
                       objectFit="contain"
                       objectPosition="center"
                       layout="intrinsic"
                />
            </div>
            {
                initialData.related || status === 'offline'
                ?
                    <div className={styles.text}>
                        <h1>{t(`${currentUser}.samples.${initialData.id}.name`)}</h1>
                    </div>
               :
                    <a href={initialData.address} rel="noreferrer" target="_blank">
                        <div className={styles.text}>
                            <h1>{t(`${currentUser}.samples.${initialData.id}.name`)}</h1>
                        </div>
                    </a>
            }
        </div>
    )
}
export default Index