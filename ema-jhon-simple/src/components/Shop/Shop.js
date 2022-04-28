import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/UseProducts";
import { addToDb, getStoredData } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.pages;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  useEffect(() => {
    const storedCart = getStoredData();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const cartQuantity = storedCart[id];
        addedProduct.quantity = cartQuantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  const handleAddToCart = (selectedProduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}

        <div className="pagination">
          {[...Array(pageCount).keys()].map((number ,i) => (
            <button
            key={i}
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <div className="review-btn">
            <Link to="/order">
              {" "}
              <button>
                Review Orders{" "}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>{" "}
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
