import axios from "axios";
import { useEffect, useState } from "react";
import { useParams ,Link, Outlet} from "react-router-dom"
import { Home } from "./home";
import { Details } from "./details";


export function Products(){

    let params = useParams();

    const[product,setproduct]=useState([]);

    useEffect(()=>{
        axios.get(`http://fakestoreapi.com/products/category/${params.category}`)
        .then(responce=>{
                setproduct(responce.data)
                
        })
    },[]);

    return(
        <div>
            <h1>Products</h1>
         <div style={{display:'grid', gridTemplateColumns: '6fr 6fr'}}>
         <div>
           {
                product.map(item=>
                   <Link key={item.id} to={`details/${item.id}`}>
                     <img src={item.image} width={"100"} height={"100"} style={{margin:"20px",display:'block'}} />
                   </Link>
                    )
            }
           </div>
           <div>
                <Outlet></Outlet>
           </div>
         </div>
            <p>
                <Link to="/"> back to category ?</Link>
            </p>

        </div>
    )
}