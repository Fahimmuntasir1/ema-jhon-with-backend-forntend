import React from "react";
import "./Product.css";

const Product = ({product,handleAddToCart}) => {
    // const {product,handleAddToCart}=props
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <p className="product-name">{name}</p>
      <b className="product-price">Price : ${price}</b>
      <p className="product-seller">
        <small>Manufacturer : {seller}</small>
      </p>
      <p className="product-ratings">
        <small>Rating : {ratings}</small>
      </p>
      <button onClick={()=>handleAddToCart(product)} className="btn-cart"> <p>Add To Cart</p> </button>
    </div>
  );
};

export default Product;
