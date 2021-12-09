import React from "react";
import "./Home.css";

function Home(props) {
  const { className } = props;

  return (
    <div className={`home-5 ${className || ""}`}>
      <img className="home-6" src="/img/home-1@2x.svg" />
      <div className="place-3 poppins-light-white-20px">Home</div>
    </div>
  );
}

export default Home;
