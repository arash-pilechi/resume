import Card from "./card"
import styles from "./index.module.scss"

const Index = ({initialData,currentUser,status}) => {
    return(
        <div className={styles.samples}>
            {
                initialData.map(card =>
                    <Card initialData={card} currentUser={currentUser} status={status} />
                )
            }
        </div>
    )
}
export default Index