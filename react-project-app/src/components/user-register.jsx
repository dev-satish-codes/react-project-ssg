import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function UserRegister(){

    const [users, setusers]= useState([{UserId:'', UserName:'', Password:'', Email:'',  Mobile:''}]);
    const [usererror,setusererror]= useState('');

    useEffect(()=>{
        axios.get('http://127.0.0.1:2200/users')
        .then(responce =>{
            setusers(responce.data)
        })
    },[]);

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:  {
            UserId:'',
            UserName:'',
            Password:'',
            Email:'',
            Mobile:''
        },
        onSubmit: (user) => {
            axios.post('http://127.0.0.1:2200/adduser', user);
            alert('Registered Successfully..');
            navigate('/UserLogin');
        }
    })

    function VerifyUser(e){
        for (var user of users){
            if (user.UserId===e.target.value){
                setusererror("user id taken - try another");
                break;
            }else{
                setusererror("user id available")
            }
        }
    }
    return(
        <div>
            <h4>register user</h4>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onKeyUp={VerifyUser} name="UserId" onChange={formik.handleChange} /></dd>
                    <dd>{usererror}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange} /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <Link to={'/'} className="btn btn-light ms-2">Cancel</Link>
            </form>
        </div>
    )
}