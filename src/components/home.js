import React from "react";
import check from"../assets/images/check(1).jpg"
import Carousel from "../components/carousel";
import Card from "../components/card";
function Home() {
  return (
    <>
    <Carousel/>
      <div className="container mt-5">
        <div className="my-5">
          <h1 className="mx-auto text-center">What would you like to do?</h1>
        </div>
        <div className="row gx-5 gy-10">
          <div className="col-6">
          <Card text="card1" src={check} title="Transfer Funds"/>
          </div>
          <div className="col-6">
          <Card text="card2" src={check} title="View all Customers"/>
          </div>
        </div>

        <div className="row ">
          <div className="col-4 ">
          <Card text="card3" src={check} title="Search a customer"/>
          </div>
      </div>
      </div>
    </>
  );
}

export default Home;
