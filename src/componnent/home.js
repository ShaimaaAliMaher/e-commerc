import { useEffect, useState } from "react";
import Slider from "./slider";
import ProductsList from "./productsList";
import Pagination from "./pagination";

function Home(){
    const api_url ='https://fakestoreapi.com/products'
    const [products ,setProducts]=useState([]);
    const [categories , setCategories] =useState([])
    const   getAllProduct= ()=>{
        fetch(api_url)
        .then(res=>res.json())
        .then((data)=> setProducts(data))  
    }
    const getcategories=()=>{
    fetch(`${api_url}/categories`)
       .then(res=>res.json())
       .then(data=>setCategories(data))
    }
    const getInCategory=(catName)=>{
        fetch(`${api_url}/category/${catName}`)
            .then(res=>res.json())
            .then(data=>setProducts(data))
    }
    useEffect(()=>{
      getAllProduct();
      getcategories();
    },[])
    // console.log(products)
    // console.log(categories);
   
    return(
        <>
        <Slider/>
        <button className="btn mt-3 All" onClick={()=>{getAllProduct()}
            }>AllCategories</button>
        { categories.map((cat)=>{
            return(
            <button key={cat} className="btn mt-3" onClick={()=>{getInCategory(cat)}}>{cat}</button>)
        })}
        {/* <ProductsList products={products}/> */}
        <Pagination items={products} category={categories}/>
        </>
    )
}

export default Home;