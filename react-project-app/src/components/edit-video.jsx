import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

 export function EditVideo(){
    const[Category,setCategory]=useState([{category_Id:0,categoryName:''}])
    const[videos,setvideos]= useState([{VideoId:0,Title:'',Url:'',Likes:0,Comments:'',category_Id:0}]);
   

    let navigate = useNavigate();
    let params = useParams();
    const formik = useFormik({
        initialValues:{
            VideoId:videos[0].VideoId,
            Title:videos[0].Title,
            Url:videos[0].Url,
            Likes:videos[0].Likes,
            Comments:videos[0].Comments,
            category_Id:videos[0].category_Id

        },
        enableReinitialize:true,
        onSubmit:(values)=>{
            axios.put(`http://127.0.0.1:2200/editvideo/${params.id}`,values)
            alert("video updated");
            navigate("/AdminDashboard");

        }
    });
        function LoadCategories(){
            axios.get(`http://127.0.0.1:2200/categories`)
            .then(response=>{
                response.data.unshift({category_Id:-1,categoryName:'Select Category'});
                setCategory(response.data);
            })      
        }
        useEffect(()=>{
            LoadCategories();
            axios.get(`http://127.0.0.1:2200/video/${params.id}`)
            .then(response=>{
                setvideos(response.data);
            })
        },[params.id]);
    
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
                    <select value={formik.values.category_Id} onChange={formik.handleChange} name="Category_Id">
                        {
                            Category.map(Category=>
                                <option key={Category.category_Id} value={Category.category_Id}>
                                     {Category.categoryName.toUpperCase()}
                                </option>
                                )
                        }
                    </select>
                </dd>
            </dl>
            <button className="btn btn-success">save</button>
            <Link to="/AdminDashboard" className="btn btn-danger ms-2">Cancel</Link>
        </form>
        </div>
    )
 }





// import axios from "axios";
// import { useFormik } from "formik";
// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export function EditVideo() {
//     const [Category, setCategory] = useState([{ category_Id: -1, categoryName: 'Select Category' }]);
//     const [videos, setVideos] = useState([]);
//     const navigate = useNavigate();
//     const params = useParams();

//     const formik = useFormik({
//         initialValues: {
//             VideoId: '',
//             Title: '',
//             Url: '',
//             Likes: 0,
//             Comments: '',
//             Category_Id: -1 // Default value for category
//         },
//         onSubmit: (values) => {
//             axios.put(`http://127.0.0.1:2200/editvideo/${params.id}`, values)
//             .then(() => {
//                 alert("Video updated");
//                 navigate("/AdminDashbord");
//             })
//             .catch(error => {
//                 console.error('Error updating video:', error);
//                 alert("Failed to update video. Please try again.");
//             });
//         }
//     });

//     function loadCategories() {
//         axios.get(`http://127.0.0.1:2200/categories`)
//         .then(response => {
//             setCategory([{ category_Id: -1, categoryName: 'Select Category' }, ...response.data]);
//         })
//         .catch(error => {
//             console.error('Error fetching categories:', error);
//         });
//     }

//     useEffect(() => {
//         loadCategories();
//         axios.get(`http://127.0.0.1:2200/videos`)
//         .then(response => {
//             setVideos(response.data);
//         })
//         .catch(error => {
//             console.error('Error fetching videos:', error);
//         });
//     }, [params.id]);

//     useEffect(() => {
//         // Set form values when videos or params.id change
//         const video = videos.find(video => video.VideoId === parseInt(params.id));
//         if (video) {
//             formik.setValues({
//                 VideoId: video.VideoId,
//                 Title: video.Title,
//                 Url: video.Url,
//                 Likes: video.Likes,
//                 Comments: video.Comments,
//                 Category_Id: video.category_Id
//             });
//         }
//     }, [params.id, videos, formik]);

//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <dl>
//                     <dd>Video Id</dd>
//                     <dt><input type="text"  value={formik.values.VideoId} onChange={formik.handleChange} name="VideoId" /></dt>
//                     <dd>Title</dd>
//                     <dt><input type="text" value={formik.values.Title} onChange={formik.handleChange} name="Title" /></dt>
//                     <dd>Url</dd>
//                     <dt><input type="text" value={formik.values.Url} onChange={formik.handleChange} name="Url" /></dt>
//                     <dt>Likes</dt>
//                     <dd><input type="number" value={formik.values.Likes} onChange={formik.handleChange} name="Likes" /></dd>
//                     <dt>Comments</dt>
//                     <dd><input type="text" value={formik.values.Comments} onChange={formik.handleChange} name="Comments" /></dd>
//                     <dt>Category</dt>
//                     <dd>
//                         <select value={formik.values.Category_Id} onChange={formik.handleChange} name="Category_Id">
//                             {
//                                 Category.map(Category =>
//                                     <option key={Category.category_Id} value={Category.category_Id}>
//                                         {Category.categoryName.toUpperCase()}
//                                     </option>
//                                 )
//                             }
//                         </select>
//                     </dd>
//                 </dl>
//                 <button type="submit" className="btn btn-success">Save</button>
//                 <Link to="/AdminDashbord" className="btn btn-danger ms-2">Cancel</Link>
//             </form>
//         </div>
//     );
// }
