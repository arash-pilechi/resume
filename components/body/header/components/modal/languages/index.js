import {useEffect, useRef} from "react"
import Link from "next/link"
import {useRouter} from "next/router"
import {useTranslation} from 'next-i18next'
import SVG from '@/svg'
import styles from './index.module.scss'

const Index = ({setLanguagesModalVisibility}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const dropdown = useRef(null);
    const isCSR = () => {
        return process.browser && typeof window !== "undefined";
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setLanguagesModalVisibility(false);
            }
        };
        if ( isCSR() ) {
            document.addEventListener("mouseup", handleClickOutside);
        }
        return () => {
            if ( isCSR() ) {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
    }, [dropdown])
    return(
        <div className={styles.languagesModal} ref={dropdown}>
            {
                router.locales.map((locale,index) =>
                    <div className={styles.language} key={index}>
                        <Link href={router.asPath} locale={locale}>
                            <a>
                                <div className={styles.icon}>
                                    {SVG.dynamic(`flag_${locale}`)}
                                </div>
                                <div className={styles.text}>
                                    <span>{t(`languages.${locale}`)}</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
export default Index