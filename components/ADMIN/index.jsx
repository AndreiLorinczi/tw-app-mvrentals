import React from "react";
import Menu3 from "../Menu3";
import Home from "../Home";
import User from "../User";
import Group296 from "../Group296";
import "./ADMIN.css";

function ADMIN(props) {
  const {
    addChosenOption,
    upcoming,
    futureFunctionsToBeAdded,
    admin,
    manageMovies,
    postponeDelayMovie,
    options,
    addMovie,
    removeMovie,
    placeholderForForm,
    removingViaSearchingInDb,
    placeholderForForm2,
    menuProps,
    homeProps,
    userProps,
    group296Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="admin screen">
        <div className="overlap-group6-2">
          <div className="overlap-group2-4">
            <Menu3
              logo={menuProps.logo}
              className={menuProps.className}
              group286Props={menuProps.group286Props}
              group285Props={menuProps.group285Props}
            />
            <img className="union-8" src="/img/union-6@1x.svg" />
            <div className="overlap-group-11">
              <div className="add-chosen-option poppins-medium-white-25px">{addChosenOption}</div>
            </div>
            <img className="vector" src="/img/vector@2x.svg" />
            <img className="vector-1" src="/img/vector-1@2x.svg" />
            <img className="vector-2" src="/img/vector-2@2x.svg" />
            <img className="vector-3" src="/img/vector-3@2x.svg" />
            <img className="union-9" src="/img/union-7@2x.svg" />
            <Home className={homeProps.className} />
            <div className="upcoming-5 poppins-light-white-20px">{upcoming}</div>
            <img className="clock-4" src="/img/clock-2@2x.svg" />
            <img className="union-10" src="/img/union-8@2x.svg" />
            <div className="rectangle-112-1"></div>
            <User className={userProps.className} />
            <img className="upload-1" src="/img/upload@2x.svg" />
            <div className="future-functions-to-be-added poppins-medium-white-20px">{futureFunctionsToBeAdded}</div>
          </div>
          <div className="admin-1 poppins-light-quick-silver-20px">{admin}</div>
          <div className="manage-movies">{manageMovies}</div>
          <Group296 className={group296Props.className} />
          <div className="overlap-group3-2">
            <div className="postponedelay-movie poppins-medium-white-25px">{postponeDelayMovie}</div>
          </div>
          <div className="save-1 poppins-medium-white-25px">
            <div className="options">{options}</div>
            <div className="overlap-group4-1">
              <div className="x-movie">{addMovie}</div>
            </div>
          </div>
          <div className="overlap-group5-2">
            <div className="x-movie poppins-medium-white-25px">{removeMovie}</div>
          </div>
          <div className="rectangle-118"></div>
          <div className="placeholder-for-form poppins-medium-white-25px">{placeholderForForm}</div>
          <div className="removing-via-searching-in-db poppins-medium-white-25px">{removingViaSearchingInDb}</div>
          <div className="placeholder-for-form-1 poppins-medium-white-25px">{placeholderForForm2}</div>
          <img className="iconly-bulk-arrow-left-circle-2" src="/img/iconly-bulk-arrow---left-circle@2x.svg" />
        </div>
      </div>
    </div>
  );
}

export default ADMIN;
