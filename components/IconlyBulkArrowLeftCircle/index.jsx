import React from "react";
import "./IconlyBulkArrowLeftCircle.css";

function IconlyBulkArrowLeftCircle(props) {
  const { className } = props;

  return (
    <div className={`iconly-bulk-arrow-left-circle ${className || ""}`}>
      <img className="iconly-bulk-arrow-left-circle-1" src="/img/iconly-bulk-arrow---left-circle-2@2x.svg" />
    </div>
  );
}

export default IconlyBulkArrowLeftCircle;
