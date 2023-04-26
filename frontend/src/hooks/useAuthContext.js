import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        console.log("Authorization must be conducted within the scope of the context provider.")
    }

    return context
}