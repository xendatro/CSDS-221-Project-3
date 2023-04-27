import { useHomeContext } from "../hooks/useHomeContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Details({isFrom, to, from, subject, body, createdAt}) {
    const {homeState, dispatch} = useHomeContext()

    const handleClick = (e) => {
        dispatch({type: "VIEW", payload: {to, from, subject, body, homeState}})
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <button onClick={handleClick} className="btn btn-secondary">View eMessage</button>
                    </div>
                    <div className="col-md-2">
                        {isFrom ? <p><b>From:</b> {from}</p> : <p><b>To:</b> {to}</p> } 
                    </div>
                    <div className="col-md-5">
                        <p><b>Subject:</b> {subject}</p>
                    </div>
                    <div className="col-md-2">
                        <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Details