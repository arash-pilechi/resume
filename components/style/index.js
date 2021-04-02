import {useContext} from "react"
import {useRouter} from "next/router"
import {MainContext} from "@/context/main"

const Index = () => {
    const router = useRouter();
    const darkTheme = useContext(MainContext).darkTheme;
    return(
        <style global jsx>{`
            :root{
                --grayscale: ${darkTheme ? 'black' : 'white'};
                --grayscale-gradient1: ${darkTheme ? 'rgba(10, 20, 25, 0.5)' : 'rgb(255, 255, 255, 0.5)'};
                --grayscale-gradient2: ${darkTheme ? 'rgba(0, 208, 255, 0.17)' : 'rgba(0, 0, 0, 0.17)'};
                --grayscale-gradient3: ${darkTheme ? 'rgba(10, 20, 25, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
                --grayscale-transparent1: ${darkTheme ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
                --grayscale-transparent2: ${darkTheme ? 'rgba(51, 51, 51, 0.2)' : 'rgba(51, 51, 51, 0.2)'};
                --background: ${darkTheme ? "url('/images/background/pattern_dark.png')" : "url('/images/background/pattern_light.png')"};
                --grayscale-background: ${darkTheme ? '#010101' : '#ebebeb'};
                --grayscale-color: ${darkTheme ? '#c1c1c1' : '#666666'};
                --direction: ${ ['fa', 'ar'].includes(router.locale) ? 'rtl' : 'ltr'};
            }
        `}</style>
    )
}
export default Index