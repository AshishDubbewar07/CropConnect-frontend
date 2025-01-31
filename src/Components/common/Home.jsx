import React from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap justify-center gap-3 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
