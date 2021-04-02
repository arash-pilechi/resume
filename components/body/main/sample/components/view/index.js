import {useTranslation} from 'next-i18next'
import SVG from '@/svg'
import styles from './index.module.scss'

const Index = ({initialData}) => {
    const {t} = useTranslation('samples');
    return(
        <div className={styles.view}>
            <a href={initialData.address} target="_blank">
                <button>
                    <div className={styles.icon}>
                        {SVG.browser()}
                    </div>
                    <div className={styles.text}>
                        <span>{t('view')}</span>
                    </div>
                </button>
            </a>
        </div>
    )
}
export default Index