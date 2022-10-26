import React from "react";
import Banner from "../components/home/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <img src={require("../assets/images/Group 1.png")} alt="subbanner" style={{width: "100%"}}/>
    </div>
  );
}

export default Home;