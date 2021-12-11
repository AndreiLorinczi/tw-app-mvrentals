import React from "react";
import Menu from "../Menu";
import Home from "../Home";
import Group261 from "../Group261";
import "./UPCOMING.css";

function UPCOMING(props) {
  const {
    union,
    upcoming,
    logo,
    spanText,
    spanText2,
    rectangle,
    name1,
    rectangle2,
    name2,
    rectangle3,
    name3,
    rectangle4,
    name4,
    rectangle5,
    name5,
    rectangle6,
    name6,
    spanText3,
    spanText4,
    rectangle7,
    name12,
    rectangle8,
    name22,
    rectangle9,
    name32,
    rectangle10,
    name42,
    rectangle11,
    name52,
    rectangle12,
    name62,
    group261Props,
    group2612Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="upcoming-2 screen">
        <div className="overlap-group1-5">
          <div className="overlap-group-6">
            <Menu />
            <Home />
            <img className="union-5" src="/img/union-2@1x.svg" />
            <div className="group-296">
              <img className="clock-2" src={union} />
              <div className="upcoming-3 poppins-light-chateau-green-20px">{upcoming}</div>
            </div>
          </div>
          <img className="logo-4" src={logo} />
          <div className="panel2">
            <div className="group-275-2">
              <div className="arriving-this-year dmsans-bold-white-36px-2">
                <span className="span-3 dmsans-bold-white-36px">{spanText}</span>
                <span className="span-3 dmsans-bold-chateau-green-36px">{spanText2}</span>
              </div>
              <div className="flex-row-8">
                <div className="flex-col-8">
                  <img className="rectangle-2" src={rectangle} />
                  <div className="name-1-2 dmsans-bold-white-24px">{name1}</div>
                </div>
                <div className="flex-col-9">
                  <img className="rectangle-2" src={rectangle2} />
                  <div className="name-3 dmsans-bold-white-24px">{name2}</div>
                </div>
                <div className="flex-col-9">
                  <img className="rectangle-2" src={rectangle3} />
                  <div className="name-3 dmsans-bold-white-24px">{name3}</div>
                </div>
                <div className="flex-col-9">
                  <img className="rectangle-2" src={rectangle4} />
                  <div className="name-3 dmsans-bold-white-24px">{name4}</div>
                </div>
                <div className="flex-col-9">
                  <img className="rectangle-2" src={rectangle5} />
                  <div className="name-3 dmsans-bold-white-24px">{name5}</div>
                </div>
                <div className="flex-col-9">
                  <img className="rectangle-2" src={rectangle6} />
                  <div className="name-6-2 dmsans-bold-white-24px">{name6}</div>
                </div>
              </div>
            </div>
            <Group261 className={group261Props.className} />
          </div>
          <div className="panel1">
            <div className="premieres-this-month dmsans-bold-white-36px-2">
              <span className="span-3 dmsans-bold-white-36px">{spanText3}</span>
              <span className="span-3 dmsans-bold-chateau-green-36px">{spanText4}</span>
            </div>
            <div className="flex-row-9">
              <div className="flex-col-8">
                <img className="rectangle-2" src={rectangle7} />
                <div className="name-1-2 dmsans-bold-white-24px">{name12}</div>
              </div>
              <div className="flex-col-9">
                <img className="rectangle-2" src={rectangle8} />
                <div className="name-3 dmsans-bold-white-24px">{name22}</div>
              </div>
              <div className="flex-col-9">
                <img className="rectangle-2" src={rectangle9} />
                <div className="name-3 dmsans-bold-white-24px">{name32}</div>
              </div>
              <div className="flex-col-9">
                <img className="rectangle-2" src={rectangle10} />
                <div className="name-3 dmsans-bold-white-24px">{name42}</div>
              </div>
              <div className="flex-col-9">
                <img className="rectangle-2" src={rectangle11} />
                <div className="name-3 dmsans-bold-white-24px">{name52}</div>
              </div>
              <div className="flex-col-9">
                <img className="rectangle-2" src={rectangle12} />
                <div className="name-6-2 dmsans-bold-white-24px">{name62}</div>
              </div>
            </div>
            <Group261 className={group2612Props.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UPCOMING;
