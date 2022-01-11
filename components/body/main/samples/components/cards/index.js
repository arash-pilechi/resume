import Card from "./card"
import styles from "./index.module.scss"

const Index = ({initialData,currentUser,status}) => {
    return(
        <div className={styles.samples}>
            {
                initialData.map((card, index) =>
                    <Card initialData={card} currentUser={currentUser} status={status} key={index} />
                )
            }
        </div>
    )
}
export default Index