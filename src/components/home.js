import React from "react";
import check from "../assets/images/check(1).jpg";
import Carousel from "../components/carousel";
import Card from "../components/card";
function Home() {
  return (
    <>
      <Carousel />
      <div className="container mt-5 card-container">
        <div className="my-5">
          <h1 className="text-center text-white green-hover">
            What would you like to do?
          </h1>
        </div>
        <div className="row row-cols-auto">
          <div className="col-auto">
            <Card text="card1" src={check} title="Transfer Funds" />
          </div>
          <div className="col-auto">
            <Card text="card2" src={check} title="View all Customers" />
          </div>

          <div className="col-auto">
            <Card text="card3" src={check} title="Search a customer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
