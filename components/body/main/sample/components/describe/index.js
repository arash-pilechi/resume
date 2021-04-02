import {useTranslation} from 'next-i18next'
import styles from './index.module.scss'

const Index = ({initialData,currentUser}) => {
    const {t} = useTranslation('samples');
    return(
        <div className={styles.describe}>
            <p>{t(`${currentUser}.samples.${initialData.id}.describe`)}</p>
        </div>
    )
}
export default Index