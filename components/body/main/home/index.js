import PersonalInfo from './components/profilerInfo'
import Detail from './components/detail'
import Specialities from './components/specialties'
import Clients from './components/clients'
import styles from './index.module.scss'

const Index = ({currentUser,specialties}) => {
    return(
        <main className={styles.main}>
            <div className="container">
                <div className={styles.sides}>
                    <div className={styles.side_a}>
                        <PersonalInfo currentUser={currentUser} />
                    </div>
                    <div className={styles.side_b}>
                        <Detail currentUser={currentUser} />
                    </div>
                </div>
                <Specialities initialData={specialties} />
                <Clients currentUser={currentUser} />
            </div>
        </main>
    )
}
export default Index