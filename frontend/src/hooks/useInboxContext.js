import { InboxContext } from "../contexts/InboxContext";
import {useContext} from "react"

export const useInboxContext = () => {
    const context = useContext(InboxContext)

    if (!context) {
        throw Error("InboxContext must be used inside of InboxContextProvider")
    }

    return context
}