import { createContext, useState } from "react"

export const appContext = createContext()

export const AppContext = ({ children }) => {

    const [searshInput , setSearshInput] = useState(false)
    const [ContactSupport , setContactSupport] = useState(false)
    // theme (dark / light)
    const [theme , setTheme] = useState('light')
    // alerts
    const [LogoutDialog , setLogoutDialog] = useState(false)
    const [ForgetPassword , setForgetPassword] = useState(false)
    
    const state = {
        searshInput ,
        setSearshInput ,
        LogoutDialog ,
        setLogoutDialog ,
        ContactSupport , 
        setContactSupport ,
        ForgetPassword , 
        setForgetPassword , 
        theme ,
        setTheme
    }

    return (
        <appContext.Provider value={state}>
            {children}
        </appContext.Provider>
    )
}