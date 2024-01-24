import { Link } from "react-router-dom";


export function LoginTutorial(){
    return(
<div>
    <form className="w-25">
        <h3>User Login</h3>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text" className="form-control" /></dd>
            <dt>Password</dt>
            <dd><input type="password" className="form-control" /></dd>

        </dl>
        <button type="button" className="btn btn-primary w-100">Login</button>
    </form>
    <Link to='/register'>Dont have an Account? register Here</Link>
</div>

    )
}