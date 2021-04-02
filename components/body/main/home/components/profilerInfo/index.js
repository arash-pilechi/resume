import Image from "next/image"
import {useTranslation} from 'next-i18next'
import styles from './index.module.scss'

const Index = ({currentUser}) => {
    const {t} = useTranslation();
    return(
        <div className={styles.personalInfo}>
            <div className={styles.image}>
                <Image src={`/images/users/${currentUser}/profile.jpg`}
                       alt={t(`${currentUser}.name`)}
                       layout="intrinsic"
                       width={200}
                       height={200}
                />
            </div>
            <div className={styles.name}>
                <h1>{t(`home:${currentUser}.name`)}</h1>
            </div>
        </div>
    )
}
export default Index