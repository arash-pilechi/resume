import {useTranslation} from 'next-i18next'
import Header from '@/header/default';
import Footer from '@/footer/default';
import Style from "@/style";

const LayoutDefault = ({children,socialMedia,contactInfo}) => {
    const {t} = useTranslation('common');
    return(
        <>
            <Style />
            <Header/>
            {children}
            <Footer socialMedia={socialMedia}
                    contactInfo={contactInfo}/>
            <noscript>
                <p>{t('common:noScript')}</p>
            </noscript>
        </>
    )
}
export default LayoutDefault