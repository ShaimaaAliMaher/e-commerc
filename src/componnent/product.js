import React from "react";
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from "react-router-dom";
function Product(props){
    // console.log(props);
    const {product ,showButton} =props
    return(
        <>
        <div className="card" >
      <img src={product.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> <LinesEllipsis
          text={product.title}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        /></h5>
        <LinesEllipsis
          text={product.description}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        {/* <p className="card-text">{product.description}</p> */}
        {showButton && <Link to={`/product/${product.id}`} className="btn btn-1 mt-3">Details</Link>}
      </div>
    </div> 
        </>
    )
}
export default Product;