import { SentContext } from "../contexts/SentContext";
import {useContext} from "react"

export const useSentContext = () => {
    const context = useContext(SentContext)

    if (!context) {
        throw Error("SentContext must be used inside of SentContextProvider")
    }

    return context
}