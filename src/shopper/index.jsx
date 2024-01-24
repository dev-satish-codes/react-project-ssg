import { BrowserRouter, Route,  Routes } from "react-router-dom";
import { Home } from "./home";
import { Products } from "./products";
import { Details } from "./details";



export function ShopperIndex(){
    return(
        <div>
            <BrowserRouter>
                <h1 className="bg-dark text-center text-white">Shopper</h1>

                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="product/:category" element={<Products />}>
                <Route path="details/:id" element={<Details />}></Route>
                </Route>
               
                </Routes>
            </BrowserRouter>
        </div>
    )
}