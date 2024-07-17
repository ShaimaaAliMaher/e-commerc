import Product from "./product"
function ProductsList ({currentItems}){
    return(
 <>
 <h2 className="text-center mt-5">Our Products</h2>
 <div className="container">
  <div className="row mt-5">
    {currentItems.map((ele)=>{
      return(<div className=" col-4"key={ele.id} >
      <Product product={ele} showButton={true} /> 
     </div>)
    })} 
  </div>
  </div>
   
 </>
    )
}
export default ProductsList