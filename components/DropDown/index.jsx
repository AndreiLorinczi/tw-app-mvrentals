import React from "react";
import "./DropDown.css";

function DropDown(props) {
  const { allCategories } = props;

  return (
    <div className="drop-down border-2px-wild-sand-2">
      <div className="all-categories poppins-medium-black-20px">{allCategories}</div>
      <img className="caret" src="/img/caret@2x.svg" />
    </div>
  );
}

export default DropDown;
