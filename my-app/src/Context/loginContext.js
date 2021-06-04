import React, {useContext} from 'react'


export const LoginContext = React.createContext([])

export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({children}) => {

    


    return (
        <LoginContext.Provider value={}>
            {children}
        </LoginContext.Provider>
    )
}
