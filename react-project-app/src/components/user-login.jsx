import axios from "axios";
import { useFormik } from "formik/dist";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'; 

export function UserLogin(){
    let navigate = useNavigate();
    const[users, setusers] = useState([{UserId:'',UserName:'',Password:'',Email:'',Mobile:''}]);
    const[usererror,setusererror]= useState('');

     const [cookies, setCookie, removeCookie]=useCookies('UserName');

     const formik = useFormik({
        initialValues:{
            UserId:'',
            Password:''
        },
        validationSchema: Yup.object().shape({
            UserId: Yup.string()
                .required('User ID is required'),
            Password: Yup.string()
                .required('Password is required')
        }),
        onSubmit:(values)=>{
            var user = users.find(item=>item.UserId === values.UserId);
            if (user && user.Password===values.Password  && user.UserId===values.UserId){
                setCookie("UserName", user.UserName);
                navigate("/UserDashbord");
            }else{
                setusererror('Invalid credentials...');              
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
                    <dd>
                        <input
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.UserId}
                            name="UserId"
                        />
                        {formik.touched.UserId && formik.errors.UserId ? (
                            <div className="text-danger">{formik.errors.UserId}</div>
                        ) : null}
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Password}
                            name="Password"
                        />
                        {formik.touched.Password && formik.errors.Password ? (
                            <div className="text-danger">{formik.errors.Password}</div>
                        ) : null}
                    </dd>
                </dl>
                <button className="btn btn-warning">Login</button>
                <Link to="/UserRegister" className="btn btn-success ms-2">New User?</Link>
                <p className="h4 text-danger">{usererror}</p>
            </form>
        </div>
    )
}
