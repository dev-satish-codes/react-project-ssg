import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Products } from "./products";


export function Details(){

    const [details,setdetails]= useState({id:0,title:'',price:'',decripton:'',image:''});
    let params = useParams()

    useEffect(()=>{
        axios.get(`http://fakestoreapi.com/products/${params.id}`)
        .then(Response=>{
            setdetails(Response.data);
            console.log(Response.data)
        })
    },[params.id]);

    return(
        <div>
            <h2>details</h2>
            <img src={details.image} height={'200'} width={'200'}  />
            <dl>
                <dt>title</dt>
                <dd>{details.title}</dd>
                <dt>price</dt>
                <dd>{details.price}</dd>
            </dl>

            <p>
                <Link to={`/product/${Products.category}`}> back to products?</Link>
            </p>
                
        </div>

            )
}