import { useHomeContext } from "../hooks/useHomeContext"

function View({from, to, body, subject}) {
    const {payload, dispatch} = useHomeContext()

    const handleClick = (e) => {
        if (payload.homeState === "INBOX") {
            dispatch({type: "INBOX"})
        } else {
            dispatch({type: "SENT"})
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-header d-flex">
                    Message from {from} to {to}
                </div>
                <div className="card-body">
                    <div>
                        <p><b>From:</b> {from}</p>
                        <p><b>To:</b> {to}</p>
                        <p><b>Subject:</b> {subject}</p>
                        <p><b>Body:</b> {body}</p>
                    </div>
                </div>
            </div>
            <br />
            <button onClick={handleClick} className="btn btn-primary">Back to {payload.homeState === "INBOX" ? "inbox" : "sent"}</button>
        </>
    )
}

export default View