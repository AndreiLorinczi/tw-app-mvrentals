import React from "react";
import "./User.css";

function User(props) {
  const { className } = props;

  return (
    <div className={`user-4 ${className || ""}`}>
      <div className="overlap-group-10">
        <div className="profile-photo"></div>
      </div>
      <div className="popescu-ion poppins-regular-normal-white-20px">Popescu Ion</div>
    </div>
  );
}

export default User;
