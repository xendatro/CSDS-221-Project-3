import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useAuthContext()

    const register = async (username, password) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch('api/user/register', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else {
            localStorage.setItem("user", JSON.stringify(json))

            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
        }
    }    
    
    return {register, isLoading, error}
}