import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function AdminDashbord(){

    const [cookie,setCookie,removeCookie] = useCookies('adminName');
    const [videos,setvideos] = useState([{VideoId:0,Title:'',Url:'',Comments:'',Likes:0,Category_Id:0}]);
    let navigate = useNavigate();

    function LoadVideos(){
        axios.get('http://127.0.0.1:2200/videos')
        .then (responce=>{
            setvideos(responce.data)
        })
    }
    useEffect(()=>{
        if(cookie['adminName']===undefined){
            navigate('/AdminLogin')
        }else{
           LoadVideos();
        }
    },[]);
    return(
        <div>
           <h3>{cookie['adminName']}  - Dashbord</h3>
            
           <div className="mb-4">
            <Link to="/AddVideo" className="btn btn-primary"> New Video</Link>
           </div>
           <table className="table table-hover">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Preview</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        videos.map(video=>
                            <tr key={video.VideoId}>
                                <td width="200">{video.Title}</td>
                                <td><iframe src={video.Url} height="100" width="300"></iframe></td>
                                <td>
                                    <Link to={`/EditVideo/${video.VideoId}`} className="btn btn-warning bi bi-pen-fill me-2"></Link>
                                    <Link to={`/DeleteVideo/${video.VideoId}`} className="btn btn-danger bi bi-trash-fill"></Link>
                                </td>
                            </tr>
                            )
                    }
                </tbody>

           </table>
        </div>
    )
}