import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { name, price, quantity, shipping, img } = product;
  return (
    <div className="review-item">
      <img src={img} alt=""></img>
      <div className="review-info">
        <div className="details-container">
          <p className="title" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price : <span className="orange-color">${price}</span>
          </p>
          <p>
            {" "}
            <small>Shipping : ${shipping}</small>
          </p>
          <p>
            <small>Quantity : {quantity} Pcs</small>
          </p>
        </div>
        <div className="button-div">
          <button onClick={() => handleRemoveItem(product)}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
