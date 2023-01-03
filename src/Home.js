import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://i.ibb.co/GtvsPM7/Black-Friday-Online-Shopping-Banner.jpg"
          alt="Sale banner"
        />
        <div className="home_row">
          <Product
            id="20011"
            title="Dear Stranger, You Deserve To Be Loved  (English, Paperback, Bagrecha Ashish)"
            price={190}
            image="https://rukminim1.flixcart.com/image/416/416/l3lx8cw0/book/f/3/k/dear-stranger-you-deserve-to-be-loved-original-imagep37d4yag5gm.jpeg?q=70"
            rating={5}
          />
          <Product
            id="20012"
            title="FOGG Paradise Deodorant For Women (Pack of 2) Deodorant Spray - For Women  (300 ml, Pack of 2)"
            price={260}
            image="https://rukminim1.flixcart.com/image/416/416/kk4c13k0/deodorant/x/l/c/300-paradise-deodorant-for-women-pack-of-2-2-deodorant-spray-original-imafzj3hbazugdgg.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="20013"
            title="POKARI Men,Women,Kids,Girls,Boys - 3 Fold with Auto Open and Close Umbrella  (Black)"
            price={150}
            image="https://rukminim1.flixcart.com/image/416/416/l3vxbbk0/umbrella/q/q/9/42-3-fold-compact-umbrella-for-men-rain-pocket-portable-folding-original-imagewhggrzrjn8v.jpeg?q=70"
            rating={3}
          />
          <Product
            id="20014"
            title="Girls Midi/Knee Length Party Dress  (Multicolor, Sleeveless)"
            price={570}
            image="https://rukminim1.flixcart.com/image/832/832/k6ci8i80/kids-apparel-combo/t/e/y/10-11-years-capfrock-ftc-fashions-original-imafkzcdegdyzkfy.jpeg?q=70"
            rating={5}
          />
          <Product
            id="20015"
            title="Pigeon Clean Easy Deluxe Spin Mop for Home"
            price={999}
            image="https://rukminim1.flixcart.com/image/416/416/jvfk58w0/mop-set/s/m/h/14211-pigeon-original-imafgcyvb5zmx6br.jpeg?q=70"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="20016"
            title="LG 164 cm (65 inch) Ultra HD (4K) LED Smart WebOS TV  (65UK6360PTE)"
            price={85000}
            image="https://rukminim1.flixcart.com/image/416/416/joonafk0/television/z/n/v/lg-65uk6360pte-original-imafb3ahqydwgpsa.jpeg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
