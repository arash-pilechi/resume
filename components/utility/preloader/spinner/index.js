import styles from './index.module.scss'

const Index = () => {
    return(
        <div className={styles.spinner}>
            <div className={styles.spinner_holder}>
                <div className={styles.ring}>{}</div>
            </div>
        </div>
    )
};

export default Index;