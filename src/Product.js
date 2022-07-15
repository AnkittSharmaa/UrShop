import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>26</strong>
        </p>
        <div className="product_rating">
          
          <p> ⭐</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/P/B005PR422K.01._SCLZZZZZZZ_SX500_.jpg"
        alt="product "
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
