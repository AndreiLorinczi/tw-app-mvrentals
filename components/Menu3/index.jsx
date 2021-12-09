import React from "react";
import Group286 from "../Group286";
import Group285 from "../Group285";
import "./Menu3.css";

function Menu3(props) {
  const { logo, className, group286Props, group285Props } = props;

  return (
    <div className={`menu-4 ${className || ""}`}>
      <img className="logo-5" src={logo} />
      <Group286 className={group286Props.className} />
      <Group285 className={group285Props.className} />
    </div>
  );
}

export default Menu3;
