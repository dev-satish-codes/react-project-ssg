import { Link } from "react-router-dom";


export function RegisterTutorial(){
    return(
        <div>
            <form className="w-25">
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                    <dt>MobileNo</dt>
                    <dd><input type="text" className="form-control" /></dd>
                </dl>
                <button className="btn btn-primary w-100" type="button" >Register</button>
            </form>
            <Link to='/login'>Existing User? Login</Link>
        </div>
    )
}