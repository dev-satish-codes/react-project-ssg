import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function UserDashbord(){

    const [cookie,setCookie,removeCookie]= useCookies('UserName');
    const [video, setvideo] = useState([{VideoId:0,Title:'',Url:'',Likes:0,Comments:'',category_Id:0}]);

    let navigate = useNavigate();

    function LoadVideos(){
        axios.get('http://127.0.0.1:2200/videos')
        .then(responce=>{
            setvideo(responce.data);
        })
    }
    useEffect(()=>{
        if(cookie['UserName']===undefined){
            navigate('/UserLogin')
        }else{
            LoadVideos();
        }
    },[])
    return(
        <div>
            <h3>{cookie['UserName']}  -  Dashbord</h3>
            <section className="d-flex flex-wrap">
                {
                    video.map(video=>
                        <div key={video.VideoId} className="card p-2 m-2" style={{width:'400px'}}>
                            <div className="card-header" style={{height:'50px'}}>
                               <h3> {video.Title}</h3>
                            </div>
                            <div className="card-body">
                                <iframe src={video.Url} height="200" width="300"></iframe>
                            </div>
                            <div className="card-footer">
                            <span className="bi bi-hand-thumbs-up"></span> {video.Likes} Likes
                            
                            <div>
                                <label className="form-label fw-bold">Comments: </label>
                            
                            <div>
                                {video.Comments}
                             </div>
                            </div>
                            </div>
                        </div>
                        )
                }
            </section>
        </div>
    )
}