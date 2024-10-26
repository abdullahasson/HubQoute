import { createContext, useState } from "react"

export const buyerContext = createContext()

export const BuyerContext = ({ children }) => {

    // slert show
    const [confirmationDialog , setConfirmationDialog] = useState(false)
    const [successfullyDialog , setsuccessfullyDialog] = useState(false)

    const state = {
        confirmationDialog , 
        setConfirmationDialog ,
        successfullyDialog , 
        setsuccessfullyDialog
    }

    return (
        <buyerContext.Provider value={state}>
            {children}
        </buyerContext.Provider>
    )

}
