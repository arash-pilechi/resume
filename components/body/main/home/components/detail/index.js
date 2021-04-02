import {useTranslation} from 'next-i18next'
import styles from './index.module.scss'

const Index = ({currentUser}) => {
    const {t} = useTranslation();
    return(
        <div className={styles.detail}>
            <h2>{t(`home:${currentUser}.specialities1`)}</h2>
            <h3><span>{t(`home:${currentUser}.detail1.0`)}:</span><span>{t(`home:${currentUser}.detail1.1`)}</span></h3>
            <h3><span>{t(`home:${currentUser}.detail2.0`)}:</span><span>{t(`home:${currentUser}.detail2.1`)}</span></h3>
            <h3><span>{t(`home:${currentUser}.detail3.0`)}:</span><span>{t(`home:${currentUser}.detail3.1`)}</span></h3>
            <h3><span>{t(`home:${currentUser}.detail4.0`)}:</span><span>{t(`home:${currentUser}.detail4.1`)}</span></h3>
        </div>
    )
}
export default Index