import {Link} from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

function Navbar() {
    const {user, dispatch} = useAuthContext()

    const handleClick = (e) => {
        localStorage.removeItem('user')

        dispatch({type: "LOGOUT"})
    }

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="navbar-brand ">eMessage</li>
                        </ul>
                        <ul className="navbar-nav">
                            {user ? 
                            <button className="btn btn-danger" onClick={handleClick}>Logout</button>
                            :<><Link className="navbar-item" to="/login">Login</Link>
                            <Link className="navbar-item" to="/register" style={{marginLeft:"10px"}}>Register</Link></>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar