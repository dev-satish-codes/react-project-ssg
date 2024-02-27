import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

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

        validationSchema: Yup.object().shape({
            UserID: Yup.string()
                .required('User ID is required'),
            Password: Yup.string()
                .required('Password is required')
        }),

        onSubmit:(values)=>{
            var user = users.find(item=>item.UserID === values.UserID)
            if(user && user.Password === values.Password){
                setCookie("adminName",user.UserID)
                navigate('/AdminDashboard')
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
                    <dt>Admin Id</dt>
                    <dd>
                        <input
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.UserID}
                            name="UserID"
                        />
                        {formik.touched.UserID && formik.errors.UserID ? (
                            <div className="text-danger">{formik.errors.UserID}</div>
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
                <button className="btn btn-primary">Login</button>
                <p className=" h3 text-danger">{errors}</p>
            </form>
        </div>
    )
}