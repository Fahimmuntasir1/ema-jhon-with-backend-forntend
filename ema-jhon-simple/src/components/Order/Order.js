import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/UseProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveItem = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            handleRemoveItem={handleRemoveItem}
            key={product._id}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <div className="checkout-btn">
            <Link to="/shipment">
              {" "}
              <button>
                Proceed SHipping{" "}
                <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
              </button>{" "}
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
