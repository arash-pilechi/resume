import Card from './card'
import styles from './index.module.scss'

const Index = ({initialData}) => {
    return(
        <div className={styles.specialities}>
            {
                Object.values(initialData).map( (speciality, index)  =>
                    <Card initialData={speciality} key={index} />
                )
            }
        </div>
    )
}
export default Index