import {useTranslation} from 'next-i18next'
import styles from './index.module.scss'

const Index = ({currentUser}) => {
    const {t} = useTranslation('specialties');
    return(
        <div className={styles.title}>
            <h1>{t(`${currentUser}.title`)}</h1>
        </div>
    )
}
export default Index