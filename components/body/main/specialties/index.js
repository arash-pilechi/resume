import Title from './components/title'
import Specialities from './components/specialties'

const Index = ({initialData,currentUser}) => {
    return(
        <main>
            <div className="container">
                <Title currentUser={currentUser} />
                <Specialities initialData={initialData} />
            </div>
        </main>
    )
}
export default Index