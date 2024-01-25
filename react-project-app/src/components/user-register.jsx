import { Link } from "react-router-dom";

export function UserRegister(){
    return(
        <div>
            <h4>register user</h4>
            <form>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                    <dt>Email</dt>
                    <dd><input type="text" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <Link to={'/'} className="btn btn-light ms-2">Cancel</Link>
            </form>
        </div>
    )
}