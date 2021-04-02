import Slider from './components/slider'
import Title from './components/title'
import Describe from './components/describe'
import Position from './components/position'
import Technologies from './components/technologies'
import Related from './components/related'
import View from './components/view'
import styles from './index.module.scss'

const Index = ({initialData,specialties,currentUser,status}) => {
    return(
        <div className={styles.sample}>
            <div className="container">
                <Slider initialData={initialData} currentUser={currentUser} />
                <Title initialData={initialData} currentUser={currentUser} status={status} />
                <Describe initialData={initialData} currentUser={currentUser} />
                <Position initialData={initialData} currentUser={currentUser} />
                {
                    status === 'online' &&
                        <>
                            <Technologies initialData={initialData} currentUser={currentUser} specialties={specialties} />
                            {
                                initialData.related?.length > 0
                                    ?   <Related initialData={initialData} currentUser={currentUser} />
                                    :   <View initialData={initialData} currentUser={currentUser} />
                            }
                        </>
                }
            </div>
        </div>
    )
}
export default Index