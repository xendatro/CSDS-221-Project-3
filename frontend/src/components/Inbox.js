import { useEffect } from "react";
import { useInboxContext } from "../hooks/useInboxContext";
import { useAuthContext } from "../hooks/useAuthContext"
import Details from "./Details";

function Inbox() {
    const {inbox, dispatch} = useInboxContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchInbox = async () => {
            const response = await fetch('/api/receive', {
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json = await response.json()

            console.log(json)

            if (response.ok) {
                dispatch({type: "SET", payload: json})
            }
        }

        if (user) {
            fetchInbox()
        }
    }, [dispatch, user])    

    return (
        <div className="inbox container-fluid">
            <div className="card">
                <div className="card-header">
                    Inbox
                </div>
                <div className="card-body">
                    {inbox && inbox.map((letter) => (
                        <Details createdAt={letter.createdAt} isFrom={true} key={letter._id} to={letter.toUsername} from={letter.fromUsername} subject={letter.subject} body={letter.body} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Inbox