import axios from "axios";
import { useFormik } from "formik/dist";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function UserLogin(){
    let navigate = useNavigate();
    const[users, setusers] = useState([{UserId:'',UserName:'',Password:'',Email:'',Mobile:''}]);
    const[usererror,setusererror]= useState('');

     const [cookies, setCookie, removeCookie]=useCookies('UserName');

     const formik = useFormik({
        initialValues:{
            UserId:'',
            UserName:''
        },
        onSubmit:(values)=>{
            var user = users.find(item=>item.UserId === values.UserId);
            if (user.Password===values.Password){
                setCookie("UserName", user.UserName);
                navigate("/UserDashbord");
            }else{
                setusererror('invalid credentials...');
            }
        }
     })

     useEffect(()=>{
        axios.get('http://127.0.0.1:2200/users')
        .then((responce)=>{
            setusers(responce.data)
        })
     },[]);

    return(
        <div>
            <h3>User Login</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserId" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
                </dl>
                <button className="btn btn-warning">Login</button>
                <Link to="/UserRegister" className="btn btn-success ms-2">New User?</Link>
                <p className="h4 text-danger">{usererror}</p>
            </form>
        </div>
    )
}