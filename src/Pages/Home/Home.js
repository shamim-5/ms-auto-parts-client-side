import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Services from "../Parts/Services";
import Reviews from "./Reviews";
import Summery from "./Summery";
import Premium from "./Premium";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Reviews />
      <Summery />
      <Premium />
      <Category />

    </div>
  );
};

export default Home;
