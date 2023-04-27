import { useState } from "react";
import {useRegister} from "../hooks/useRegister"

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {register, isLoading, error} = useRegister()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(username, password)

    }

    return (
        <div class="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <br />
                            <h3>Sign up and begin eMessaging your friends today!</h3>
                            <br />
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input id="username" className="form-control" type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <input id="password" className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <br />
                            <button type="submit" class="btn btn-primary" disabled={isLoading} >Sign up!</button>
                            <br />
                            {error && <p>{error}</p>}
                        </form>
                     </div>
                </div>
            </div>
        </div>


    )
}

export default Register