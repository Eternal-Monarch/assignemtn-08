import React from "react";
import './Product.css';
const Product =(props)=>{
    // console.log(props.product)
    const {img,name,seller,quantity,price}=props.product;
    return(
        
        <div className="product">


{/* <h3>this is Product</h3> */}

<img src={img} alt="" />

<h6>{name}</h6>
<h6>{price}</h6>
<h6>{quantity}</h6>
<h6>{seller}</h6>

        </div>
    );
};
export default Product;