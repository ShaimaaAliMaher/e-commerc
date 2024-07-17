import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./product";
function ProductDetails(){
    let params = useParams();
    // console.log(params)
    const [product ,setProduct]=useState({})
    const api_url="https://fakestoreapi.com/products";
    useEffect(()=>{fetch(`${api_url}/${params.productId}`)
    .then((res)=>res.json())
    .then((product)=>setProduct(product))
     },[])
    return(
        <>
        <Product product={product} showButton={false}/>
        </>
    )
}
export default ProductDetails