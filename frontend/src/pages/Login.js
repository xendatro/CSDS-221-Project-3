import { useState } from "react";
import {useLogin} from "../hooks/useLogin"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {login, isLoading, error} = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(username, password)

    }

    return (
        <div class="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <br />
                            <h3>Welcome back to CMail! Glad to see you again!</h3>
                            <br />
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input id="username" className="form-control" type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                            <br />  
                            <label htmlFor="password">Password:</label>
                            <input id="password" className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <br />
                            <button type="submit" class="btn btn-primary" disabled={isLoading} >Log in!</button>
                            <br />
                            {error && <p>{error}</p>}
                        </form>
                     </div>
                </div>
            </div>
        </div>


    )
}

export default Login