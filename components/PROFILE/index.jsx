import React from "react";
import Menu3 from "../Menu3";
import Home from "../Home";
import User from "../User";
import "./PROFILE.css";

function PROFILE(props) {
  const {
    upcoming,
    save,
    overlapGroup2,
    totalWatchTime,
    number,
    h,
    overlapGroup3,
    totalReviews,
    number2,
    overlapGroup4,
    ticketsBooked,
    number3,
    overlapGroup5,
    watchedMovies,
    number4,
    userName,
    password,
    email,
    gender,
    birthdate,
    userpopescu,
    text1,
    popescuIonCom,
    female,
    male,
    date,
    menuProps,
    homeProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile-4 screen">
        <div className="overlap-group7-1">
          <Menu3
            logo={menuProps.logo}
            group286Props={menuProps.group286Props}
            group285Props={menuProps.group285Props}
          />
          <img className="union-6" src="/img/union-4@1x.svg" />
          <Home className={homeProps.className} />
          <div className="upcoming-4 poppins-light-white-20px">{upcoming}</div>
          <img className="clock-3" src="/img/clock-2@2x.svg" />
          <img className="union-7" src="/img/union-5@2x.svg" />
          <div className="rectangle-112"></div>
          <User />
          <img className="upload" src="/img/upload@2x.svg" />
          <div className="overlap-group1-6">
            <div className="save poppins-medium-white-25px">{save}</div>
          </div>
          <div className="overlap-group2-3" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            <div className="total-watch-time poppins-light-quick-silver-20px">{totalWatchTime}</div>
            <div className="overlap-group-7">
              <div className="number poppins-medium-chateau-green-35px">{number}</div>
              <div className="h">{h}</div>
            </div>
          </div>
          <div className="overlap-group3-2" style={{ backgroundImage: `url(${overlapGroup3})` }}>
            <div className="total-reviews poppins-light-quick-silver-20px">{totalReviews}</div>
            <div className="number-1 poppins-medium-chateau-green-35px">{number2}</div>
          </div>
          <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <div className="tickets-booked poppins-light-quick-silver-20px">{ticketsBooked}</div>
            <div className="number-2 poppins-medium-chateau-green-35px">{number3}</div>
          </div>
          <div className="overlap-group5-1" style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <div className="watched-movies poppins-light-quick-silver-20px">{watchedMovies}</div>
            <div className="number-3 poppins-medium-chateau-green-35px">{number4}</div>
          </div>
          <div className="group-70">
            <div className="flex-col-10 poppins-light-quick-silver-20px">
              <div className="user-name">{userName}</div>
              <div className="password-2">{password}</div>
              <div className="email-2">{email}</div>
              <div className="gender">{gender}</div>
              <div className="birthdate">{birthdate}</div>
            </div>
            <div className="flex-col-11 poppins-regular-normal-white-20px">
              <div className="userpopescu">{userpopescu}</div>
              <div className="group-66">
                <div className="text-1 poppins-regular-normal-white-20px">{text1}</div>
                <img className="edit" src="/img/edit@2x.svg" />
              </div>
              <div className="flex-col-item">{popescuIonCom}</div>
              <div className="group-69">
                <div className="female poppins-regular-normal-white-20px">{female}</div>
                <div className="group-68">
                  <img className="group-33" src="/img/group-33-1@2x.svg" />
                  <div className="male poppins-light-quick-silver-20px">{male}</div>
                </div>
              </div>
              <div className="flex-col-item">{date}</div>
            </div>
          </div>
          <img className="group-33-1" src="/img/group-33@2x.svg" />
        </div>
      </div>
    </div>
  );
}

export default PROFILE;
