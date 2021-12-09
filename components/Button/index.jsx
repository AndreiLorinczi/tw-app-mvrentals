import React from "react";
import "./Button.css";

function Button(props) {
  const { children } = props;

  return (
    <div className="button">
      <div className="search poppins-medium-white-20px">{children}</div>
    </div>
  );
}

export default Button;
