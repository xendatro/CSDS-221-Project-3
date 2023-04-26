import {createContext, useReducer} from 'react'

export const HomeContext = createContext()

export const homeReducer = (state, action) => {
    switch (action.type) {
        case "NEW":
            return {homeState: "NEW"}
        case "INBOX":
            return {homeState: "INBOX"}
        case "SENT":
            return {homeState: "SENT"}
        case "VIEW":
            return {homeState: "VIEW", payload: action.payload}
        default:
            return {homeState: "INBOX"}
    }
}

export const HomeContextProvider = ({children}) => {
    const [homeState, dispatch] = useReducer(homeReducer, {
        homeState: "INBOX"
    })

    return (
        <HomeContext.Provider value={{...homeState, dispatch}}>
            {children}
        </HomeContext.Provider>
    )
}

