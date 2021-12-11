import React from "react";
import "./Group37.css";

function Group37(props) {
  const { className } = props;

  return (
    <div className={`group-37 ${className || ""}`}>
      <div className="email poppins-medium-white-13px">Email</div>
      <div className="flex-row-4">
        <img className="message-1" src="/img/message-1@2x.svg" />
        <div className="enter-your-email-address poppins-regular-normal-white-16px">Enter your email address</div>
      </div>
      <div className="rectangle-8"></div>
    </div>
  );
}

export default Group37;
