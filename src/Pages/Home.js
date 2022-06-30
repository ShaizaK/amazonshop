import React from "react";
import "./Home.css";
import image from "../Images/banner.jpg";
import Product from "./Product";
import Speaker from "../Images/speaker.png";
import Ipad from "../Images/tablet.png";
import Laptop from "../Images/laptop.png";
import TV from "../Images/tv.png";
import Smartwatch from "../Images/watch.png";
import Keyboard from "../Images/razer.png";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={image} alt="banner" />

      {/*Products id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123456785"
          title="Razer Keyboard, Mouse"
          price={100}
          rating={5}
          image={Speaker}
        />
        <Product
          id="123456784"
          title="Smart Speaker"
          price={46}
          rating={4}
          image={Keyboard}
        />
      </div>
      <div className="home__row">
        <Product
          id="123456783"
          title=" Women Smartwatch"
          price={300}
          rating={2}
          image={Smartwatch}
        />
        <Product
          id="123456782"
          title="Lenovo Gaming Laptop"
          price={1100}
          rating={4}
          image={Laptop}
          imgSize="large"
        />
        <Product
          id="123456781"
          title="Samsung Tablet"
          price={350}
          rating={3}
          image={Ipad}
        />
      </div>
      <div className="home__row">
        <Product
          id="123456780"
          title="Samsung TV"
          price={400}
          rating={5}
          image={TV}
        />
      </div>
    </div>
  );
}

export default Home;
