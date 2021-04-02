import Link from 'next/link'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'
import SVG from "@/svg";
import styles from './index.module.scss'

const Index = ({initialData,currentUser,status}) => {
    const {t} = useTranslation('samples');
    return(
        <div className={styles.sample}>
            <Link href={`/samples/${status}/${initialData.id}`}>
                <a target="_blank">
                    <div className={styles.logo}>
                        <div className={styles.holder}>
                            <Image src={`/images/users/${currentUser}/samples/${initialData.id}/logo.png`}
                                   alt="img"
                                   width={50}
                                   height={50}
                                   objectFit="contain"
                                   objectPosition="center"
                                   layout="intrinsic"
                            />
                        </div>
                    </div>
                    <div className={styles.triangle}>{}</div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <span>{t(`${currentUser}.samples.${initialData.id}.name`)}</span>
                        </div>
                        <div className={styles.holder}>
                            <div className={styles.describe}>
                                <p>{t(`${currentUser}.samples.${initialData.id}.describe`).substring(0,100)}{t(`${currentUser}.samples.${initialData.id}.describe`).length > 100 ? ' ...' : ''}</p>
                            </div>
                            <div className={styles.buttons}>
                                <div className={styles.button}>
                                    <div className={styles.text}>
                                        <span>{t('view')}</span>
                                    </div>
                                    <div className={`${styles.icon} mirror`}>
                                        {SVG.angle_left()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
export default Index