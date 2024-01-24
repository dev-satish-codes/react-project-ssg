import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export function Home(){

    const[categories,setcategories]= useState([]);

    useEffect(()=>{
        axios.get('http://fakestoreapi.com/products/categories')
        .then(responce=>{
            setcategories(responce.data);
            
        })
    },[]);

    return(
        <div>
            <h2>Categories Home</h2>
            <ol>
            {
              categories.map(category=>
                <li key={category}><Link to={`product/${category}`}>{category.toUpperCase()}</Link> </li>
                )
            }
            </ol>

        </div>
    )
}