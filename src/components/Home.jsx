import React from "react";
import bgImg from "../assets/images/bg-img-yell.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div class="card h-100 bg-dark text-white border-0">
        <img src={bgImg} class="card-img" alt="Background-img" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-2 fw-bolder">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 fw-semibold text-black">
              SHOP YOUR FAVOURITE ITEMS OR ADD TO CART
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
