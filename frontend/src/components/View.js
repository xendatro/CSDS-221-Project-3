
function View({from, to, body, subject}) {
    return (
        <div className="card">
            <div className="card-header">
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
    )
}

export default View