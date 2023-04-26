import {createContext, useReducer} from 'react'

export const SentContext = createContext()

export const sentReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return {
                sent: action.payload
            }
        case 'CREATE':
            return {
                sent: [action.payload, ...state.sent]
            }
        default:
            return state
    }
}

export const SentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(sentReducer, {
        sent: null
    })

    console.log("SentContext: ", state)

    return (
        <SentContext.Provider value={{...state, dispatch}}>
            {children}
        </SentContext.Provider>
    )
}