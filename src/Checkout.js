import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://www.linkpicture.com/q/Screenshot-from-2022-07-16-14-00-05_1.png"
          alt="ad"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Cart</h2>
          {/* {Shopping Item} */}
          {/* {Shopping Item} */}
          {/* {Shopping Item} */}
          {/* {Shopping Item} */}
          {/* {Shopping Item} */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
