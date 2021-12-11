import React from "react";
import "./Cinema.css";

function Cinema(props) {
  const { className } = props;

  return (
    <div className={`cinema ${className || ""}`}>
      <img className="map-pin-1" src="/img/map-pin-1@2x.svg" />
      <div className="chose-cinema dmsans-bold-white-24px">Chose cinema</div>
    </div>
  );
}

export default Cinema;
