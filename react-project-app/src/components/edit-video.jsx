import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

 export function EditVideo(){
    const[Category,setCategory]=useState([{Category_Id:0,CategoryName:''}])
    const[videos,setvideos]= useState([{VideoId:0,Title:'',Url:'',Likes:0,Comments:'',Category_Id:0}]);
   

    let navigate = useNavigate();
    let params = useParams();
    const formik = useFormik({
        initialValues:{
            VideoId:videos[0].VideoId,
            Title:videos[0].Title,
            Url:videos[0].Url,
            Likes:videos[0].Likes,
            Comments:videos[0].Comments,
            Category_Id:videos[0].Category_Id

        },
        enableReinitialize:true,
        onSubmit:(values)=>{
            axios.put(`http://127.0.0.1:2200/editvideo/${params.id}`,values)
            alert("video updated");
            navigate("/AdminDashbord");

        }
    });
        function LoadCategorys(){
            axios.get(`http://127.0.0.1:2200/categories`)
            .then(responce=>{
                responce.data.unshift({Category_Id:-1,CategoryName:'Select Category'});
                setCategory(responce.data);
            })
        }
    useEffect(()=>{
        LoadCategorys();
        axios.get(`http://127.0.0.1:2200/video/${params.id}`)
        .then(responce=>{
            setvideos(responce.data)
        })

    },[]);
    
    return(
        <div>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dd>Video Id</dd>
                <dt><input type="text" value={formik.values.VideoId} onChange={formik.handleChange} name="VideoId" /></dt>
                <dd>Title</dd>
                <dt><input type="text" value={formik.values.Title} onChange={formik.handleChange} name="Title" /></dt>
                <dd>Url</dd>
                <dt><input type="text" value={formik.values.Url} onChange={formik.handleChange} name="Url" /></dt>
                <dt>Likes</dt>
                <dd><input type="number" value={formik.values.Likes} onChange={formik.handleChange} name="Likes" /></dd>
                <dt>Comments</dt>
                <dd><input type="text" value={formik.values.Comments} onChange={formik.handleChange} name="comments" /></dd>
                <dt>Category</dt>
                <dd>
                    <select value={formik.values.Category_Id} onChange={formik.handleChange} name="Category_Id">
                        {
                            Category.map(Category=>
                                <option key={Category.Category_Id} value={Category.Category_Id}>
                                    {Category.CategoryName.toUpperCase()}
                                </option>
                                )
                        }
                    </select>
                </dd>
            </dl>
            <button className="btn btn-success">save</button>
            <Link to="/AdminDashbord" className="btn btn-danger ms-2">Cancel</Link>
        </form>
        </div>
    )
 }