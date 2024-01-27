import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export function AddVideo(){

    const [categories,setcategories] = useState([{category_Id:0,categoryName:''}]);

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            VideoId:0,
            Title:'',
            Url:'',
            Likes:0,
            Comments:'',
            category_Id:0
        },
        onSubmit:(values)=>{
            axios.post('http://127.0.0.1:2200/addvideo',values);
            alert('video added successfully...')
            navigate('/AdminDashbord');
        }
    })
    function Loadcategories(){
        axios.get('http://127.0.0.1:2200/categories')
        .then(responce=>{
            responce.data.unshift({category_Id:-1,categoryName:'Select Category'});
            setcategories(responce.data);
        })
    }
    useEffect(()=>{
        Loadcategories();
    },[])
    return(
        <div>
            <h4>New Video</h4>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="VideoId" /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Title" /></dd>
                    <dt>Url</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Url" /></dd>
                    <dt>Likes</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Likes" /></dd>
                    <dt>Comments</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Comments" /></dd>
                    <dt>Category</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="category_Id">
                            {
                                categories.map(category=>
                                    <option value={category.category_Id} key={category.category_Id}>
                                        {category.categoryName.toUpperCase()}
                                    </option>
                                    )
                            }
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}