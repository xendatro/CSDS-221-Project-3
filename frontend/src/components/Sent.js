import { useEffect } from "react";
import { useSentContext } from "../hooks/useSentContext";
import { useAuthContext } from "../hooks/useAuthContext"
import Details from "./Details";

function Sent() {
    const {sent, dispatch} = useSentContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchSent = async () => {
            const response = await fetch('/api/send', {
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET", payload: json})
            }
        }

        if (user) {
            fetchSent()
        }
    }, [dispatch, user])    

    return (
        <div className="sent container-fluid">
           <div className="card">
                <div className="card-header">
                    Sent eMessages
                </div>
                <div className="card-body">
                {sent && sent.map((letter) => (
                    <Details createdAt={letter.createdAt} isFrom={false} key={letter._id} to={letter.toUsername} from={letter.fromUsername} subject={letter.subject} body={letter.body} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Sent