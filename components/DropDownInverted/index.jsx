import React from "react";
import "./DropDownInverted.css";

function DropDownInverted(props) {
  const { vid } = props;

  return (
    <div className="drop-down-inverted border-2px-wild-sand-2">
      <div className="vid">{vid}</div>
      <img className="caret-1" src="/img/caret-1@2x.svg" />
    </div>
  );
}

export default DropDownInverted;
