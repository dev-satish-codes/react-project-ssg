import { Link } from "react-router-dom";

export function UserLogin(){

    return(
        <div>
            <h3>User Login</h3>
            <form>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                </dl>
                <button className="btn btn-warning">Login</button>
                <Link to="/UserRegister" className="btn btn-success ms-2">New User?</Link>
            </form>
        </div>
    )
}