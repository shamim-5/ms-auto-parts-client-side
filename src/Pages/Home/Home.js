import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Services from "../Parts/Services";
import Reviews from "./Reviews";
import Summery from "./Summery";
import Premium from "./Premium";
import AddedProducts from "./AddedProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <AddedProducts>{`Add To Cart`}</AddedProducts>
      <Reviews />
      <Summery />
      <Premium />
      <Category />
    </div>
  );
};

export default Home;
