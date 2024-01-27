import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function AdminLogin(){

    const [users,setusers]= useState([{UserID:'',Password:''}]);
    const [errors,seterrors]=useState('');

    const [cookie,setCookie,removeCookie] = useCookies('adminName');
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            UserID:'',
            Password:''
        },
        onSubmit:(values)=>{
            var user = users.find(item=>item.UserID === values.UserID)
            if(user.Password === values.Password){
                setCookie("adminName",user.UserID)
                navigate('/AdminDashbord')
            }else{
                seterrors('Invalid credentials....')
            }
        }
    })
    useEffect(()=>{
        axios.get('http://127.0.0.1:2200/admin')
        .then((responce)=>{
            setusers(responce.data)
        })
    },[])
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Admin ID</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserID" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
                <p className=" h3 text-danger">{errors}</p>
            </form>
        </div>
    )
}