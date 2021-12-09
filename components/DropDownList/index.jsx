import React from "react";
import CheckBox from "../CheckBox";
import "./DropDownList.css";

function DropDownList(props) {
  const { all, videoInterviews, musicVideos, netflixReviews } = props;

  return (
    <div className="drop-down-list border-2px-wild-sand-2">
      <div className="drop-down-menu">
        <div className="overlap-group-container">
          <div className="overlap-group-2">
            <img className="line-3" src="/img/line-3@2x.svg" />
            <div className="content">
              <CheckBox />
              <div className="all valign-text-middle poppins-medium-black-20px">{all}</div>
            </div>
          </div>
          <div className="overlap-group1-2">
            <img className="line-3" src="/img/line-3@2x.svg" />
            <div className="content-1">
              <img className="check-box-active" src="/img/check-box---active@2x.svg" />
              <div className="video-interviews valign-text-middle poppins-medium-black-20px">{videoInterviews}</div>
            </div>
          </div>
          <div className="overlap-group2">
            <img className="line-3" src="/img/line-3@2x.svg" />
            <div className="content">
              <CheckBox />
              <div className="music-videos valign-text-middle poppins-medium-black-20px">{musicVideos}</div>
            </div>
          </div>
          <div className="overlap-group3">
            <img className="line-3" src="/img/line-3@2x.svg" />
            <div className="content">
              <CheckBox />
              <div className="netflix-reviews valign-text-middle poppins-medium-black-20px">{netflixReviews}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownList;
