import { useState } from "react"
import {MainContext, mainContext_initialData} from '@/context/main';

const MainContextProvider = ({children}) => {
    const [providerValue, setProviderValue] = useState(mainContext_initialData);
    providerValue.updateMainContext = (action,value) => {
        let shadowProviderValue = {...providerValue};
        switch (action) {
            case 'darkTheme':
                shadowProviderValue.darkTheme = value;
                break;
        }
        setProviderValue(shadowProviderValue);
    };
    return (
        <MainContext.Provider value={providerValue}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider