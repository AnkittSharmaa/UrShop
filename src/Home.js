import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_img"
          src="https://i.ibb.co/GtvsPM7/Black-Friday-Online-Shopping-Banner.jpg"
          alt="Sale banner"
        />
        <div className="home_row">
            <Product />
            {/*Pr0duct 8?   */}
        </div>
        <div className="home_row">
            {/*Pr0duct 8?   */}
            {/*Pr0duct 8?   */}
            {/*Pr0duct 8?   */}
        </div>
        <div className="home_row">
            {/*Pr0duct 8?   */}
        </div>
      </div>
    </div>
  );
}

export default Home;
