import Title from './components/title'
import Cards from './components/cards'

const Index = ({initialData,currentUser}) => {
    return(
        <main>
            <div className="container">
                <Title status="online" currentUser={currentUser} />
                <Cards status="online" initialData={initialData.online} currentUser={currentUser} />
            </div>
            <div className="container">
                <Title status="offline" currentUser={currentUser} />
                <Cards status="offline" initialData={initialData.offline} currentUser={currentUser} />
            </div>
        </main>
    )
}
export default Index