import React from "react";
import card2 from "../assets/images/card2.jpg"
import Carousel from "../components/carousel";
import Card from "../components/card";
import card1 from "../assets/images/card1.png";
import card3 from "../assets/images/card3.jpg"
function Home() {
  return (
    <>
      <Carousel />
      <div className="container mt-5 card-container gx-3">
        <div className="">
          <h1 className="text-center text-dark green-hover">
            What would you like to do?
          </h1>
        </div>
        <div className="row">
          <div className="col-auto col-lg-4">
            <Card text="card1" src={card1} title="Transfer Funds" />
          </div>
          <div className="col-auto col-lg-4">
            <Card text="card2" src={card2} title="View all Customers" />
          </div>
          <div className="col-auto col-lg-4">
            <Card text="card3" src={card3} title="Search a customer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
