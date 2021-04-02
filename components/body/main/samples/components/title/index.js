import {useTranslation} from 'next-i18next'
import styles from './index.module.scss'

const Index = ({status,currentUser}) => {
    const {t} = useTranslation('samples');
    return(
        <div className={styles.title}>
            <h1>{t(`${currentUser}.title.${status}`)}</h1>
        </div>
    )
}
export default Index