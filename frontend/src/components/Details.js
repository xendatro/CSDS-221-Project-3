import { useHomeContext } from "../hooks/useHomeContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Details({isFrom, to, from, subject, body, createdAt}) {
    const {dispatch} = useHomeContext()

    const handleClick = (e) => {
        dispatch({type: "VIEW", payload: {to, from, subject, body}})
    }

    return (
        <div onClick={handleClick} className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        {isFrom ? <p><b>From:</b> {from}</p> : <p><b>To:</b> {to}</p> } 
                    </div>
                    <div className="col-md-6">
                        <p><b>Subject:</b> {subject}</p>
                    </div>
                    <div className="col-md-3">
                        <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Details