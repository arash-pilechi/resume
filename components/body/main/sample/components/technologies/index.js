import SVG from "@/svg"
import styles from './index.module.scss'

const Index = ({initialData,specialties}) => {
    return(
        <div className={styles.technologies}>
            {
                initialData.technologies.map( technology =>
                    <div className={styles.technology}
                         title={specialties[technology].text}
                         key={technology.text}>
                        <div className={`${styles.icon} ${styles[specialties[technology].icon.name]}`}>
                            {SVG.dynamic(specialties[technology].icon.name)}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Index