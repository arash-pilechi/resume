import {useContext} from "react"
import {useState} from "react"
import Link from 'next/link'
import {useTranslation} from 'next-i18next'
import {MainContext} from "@/context/main"
import SVG from '@/svg'
import Languages from "../components/modal/languages"
import styles from './index.module.scss'

const Index = () => {
    const {t} = useTranslation();
    const {darkTheme, updateMainContext} = useContext(MainContext);
    const [languagesModalVisibility,setLanguagesModalVisibility] = useState(false);
    return(
        <header className={styles.header}>
            <div className={`container ${styles.holder}`}>
                <div className={styles.segment}>
                    <div className={styles.keys}>
                        <div className={`${styles.key} ${styles.home}`}>
                            <Link href="/">
                                <a>
                                    <div className={styles.icon}>
                                        {SVG.home()}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.segment}>
                    <div className={styles.keys}>
                        <div className={`${styles.key} ${styles.language}`}
                             title={t('language')}
                             onClick={() => setLanguagesModalVisibility(!languagesModalVisibility)}
                        >
                            <div className={styles.icon}>
                                {SVG.language()}
                            </div>
                            {
                                languagesModalVisibility &&
                                <Languages setLanguagesModalVisibility={setLanguagesModalVisibility}/>
                            }
                        </div>
                        <div className={`${styles.key} ${styles.grayscale_theme}`}
                             onClick={() => updateMainContext('darkTheme',!darkTheme)}
                             title={t(darkTheme ? 'dark_theme' : 'light_theme')}>
                            <div className={styles.icon}>
                                {SVG.moon()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Index