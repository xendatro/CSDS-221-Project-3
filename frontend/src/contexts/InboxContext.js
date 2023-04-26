import {createContext, useReducer} from 'react'

export const InboxContext = createContext()

export const inboxReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return {
                inbox: action.payload
            }
        case 'CREATE':
            return {
                inbox: [action.payload, ...state.inbox]
            }
        default:
            return state
    }
}

export const InboxContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(inboxReducer, {
        inbox: null
    })

    console.log("InboxContext: ", state)

    return (
        <InboxContext.Provider value={{...state, dispatch}}>
            {children}
        </InboxContext.Provider>
    )
}