import { useHomeContext } from "../hooks/useHomeContext"
import { useAuthContext } from "../hooks/useAuthContext"
import Inbox from "../components/Inbox"
import New from "../components/New"
import View from "../components/View"
import Sent from "../components/Sent"

function Home() {
    const {homeState, payload, dispatch} = useHomeContext()
    const {user} = useAuthContext()

    let render = null
    
    switch (homeState) {
        case "NEW":
            render = <New />
            break
        case "SENT":
            render = <Sent />
            break
        case "VIEW":
            render = <View to={payload.to} from={payload.from} subject={payload.subject} body={payload.body} />
            break
        default:
            render = <Inbox />
            break
    }

    return (
        <div className="home">
            <br />
            <h1 style={{marginLeft: "20px"}}>Welcome, {user.username}!</h1>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="btn-group-vertical form-control">
                          <button className="btn btn-primary form-control" onClick={(e) => dispatch({type: "NEW"})}>Compose New CMail</button>
                        </div>
                        <div className="btn-group-vertical form-control">
                           <button className="btn btn-info" onClick={(e) => dispatch({type: "INBOX"})}>Inbox</button>
                           <button className="btn btn-info" onClick={(e) => dispatch({type: "SENT"})}>Sent</button>
                        </div>
                    </div>
                    <div className="col-md-7">
                       {render}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home