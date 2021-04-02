import { createContext } from 'react';

export const mainContext_initialData =  {
    darkTheme: true,
    updateMainContext: () => {}
}

export const MainContext = createContext({
    ...mainContext_initialData
});
MainContext.displayName = 'MainContext';