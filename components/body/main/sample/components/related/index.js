import {useTranslation} from 'next-i18next'
import styles from './index.module.scss'

const Index = ({initialData,currentUser}) => {
    const {t} = useTranslation('samples');
    return(
        <div className={styles.related}>
            <div className={styles.title}>
                <p>{t('related')}:</p>
            </div>
            <div className={styles.list}>
                {
                    initialData.related.map( item =>
                        <div className={styles.item}>
                            <a href={item.address} target="_blank">
                                <p>{t(`${currentUser}.samples.${initialData.id}.related.${item.id}`)}</p>
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Index