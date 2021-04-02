import ContactInfo from '../components/contactInfo'
import SocialMedia from '../components/socialmedia'
import styles from './index.module.scss'

const Index = ({socialMedia,contactInfo}) => {
    return(
        <footer className={styles.footer}>
            <div className={`container ${styles.holder}`}>
                <ContactInfo initialData={contactInfo}/>
                <span className={styles.separator}>{}</span>
                <SocialMedia initialData={socialMedia}/>
            </div>
        </footer>
    )
}
export default Index