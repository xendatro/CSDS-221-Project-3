import { HomeContext } from "../contexts/HomeContext";
import { useContext } from "react";

export const useHomeContext = () => {
    const context = useContext(HomeContext)

    if (!context) {
        throw Error('Home must be used inside HomeContextProvider.')
    }

    return context
}