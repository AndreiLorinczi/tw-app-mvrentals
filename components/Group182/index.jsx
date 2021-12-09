import React from "react";
import "./Group182.css";

function Group182(props) {
  const { thu, number, className } = props;

  return (
    <div className={`group-182 ${className || ""}`}>
      <div className="thu productsans-regular-normal-nobel-11px">{thu}</div>
      <div className="number-10 productsans-regular-normal-white-15px">{number}</div>
    </div>
  );
}

export default Group182;
