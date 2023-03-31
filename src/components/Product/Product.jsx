import React from "react";
import './Product.css';
const Product =(props)=>{
    // console.log(props.product)
    const {img,name,seller,quantity,price,ratings}=props.product;
    return(
        
        <div className="product">


{/* <h3>this is Product</h3> */}

<img src={img} alt="" />
<div className="product-info">

{/* <h6>{name}</h6> */}
<h6 className="product-name">{name}</h6>
<p>price:${price}</p>
<p>Manufacturer{seller}</p>
{/* <h6>{seller}</h6> */}
<h6>Rating:{ratings} Stars</h6>
</div>

<button className="btn-cart">Add to cart</button>

        </div>
    );
};
export default Product;