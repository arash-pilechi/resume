import {useTranslation} from 'next-i18next'
import styles from './index.module.scss'

const Index = ({initialData,currentUser}) => {
    const {t} = useTranslation('samples');
    return(
        <div className={styles.position}>
            <span>{t('position')}:</span>
            <span>{t(`${currentUser}.samples.${initialData.id}.position`)}</span>
        </div>
    )
}
export default Index