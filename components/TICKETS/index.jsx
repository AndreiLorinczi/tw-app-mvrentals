import React from "react";
import Group285 from "../Group285";
import Group284 from "../Group284";
import Home from "../Home";
import Group182 from "../Group182";
import "./TICKETS.css";

function TICKETS(props) {
  const {
    rectangle,
    tickets,
    spanText,
    spanText2,
    numeFilm,
    upcoming,
    year,
    number,
    text5,
    text6,
    text2,
    text3,
    text4,
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    available,
    booked,
    selected,
    confirm17,
    iconlyBoldScan,
    text7,
    length,
    language,
    surname,
    spanText3,
    spanText4,
    spanText5,
    wed,
    number2,
    fri,
    number3,
    sat,
    number4,
    tue,
    number5,
    screen,
    logo,
    group285Props,
    group284Props,
    homeProps,
    group182Props,
    group1822Props,
    group1823Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tickets-5 screen">
        <div className="overlap-group5-3">
          <div className="overlap-group1-7">
            <div className="overlap-group-12">
              <img className="menu-6" src="/img/menu@1x.svg" />
              <img className="union-11" src="/img/union-9@1x.svg" />
              <div className="rectangle-116"></div>
              <img className="rectangle-3" src={rectangle} />
              <img className="rectangle-119" src="/img/rectangle-119@1x.svg" />
              <div className="group-286-5">
                <img className="iconly-light-ticket-5" src="/img/iconly-light-ticket-4@2x.svg" />
                <div className="tickets-6 poppins-light-chateau-green-20px">{tickets}</div>
              </div>
              <Group285 className={group285Props.className} />
              <Group284 className={group284Props.className} />
            </div>
            <div className="watch-trailer poppins-bold-white-36px">
              <span className="span0 poppins-bold-white-36px-2">{spanText}</span>
              <span className="span1">{spanText2}</span>
            </div>
            <div className="nume-film">{numeFilm}</div>
            <Home className={homeProps.className} />
            <div className="upcoming-6 poppins-light-white-20px">{upcoming}</div>
            <img className="clock-5" src="/img/clock-2@2x.svg" />
            <div className="rectangle-112-2"></div>
          </div>
          <img className="iconly-bulk-arrow-left-circle-3" src="/img/iconly-bulk-arrow---left-circle-1@2x.svg" />
          <div className="group-289 poppins-bold-white-11px-2">
            <img className="calendar-1" src="/img/calendar-1@2x.svg" />
            <div className="year">{year}</div>
            <div className="number-4">{number}</div>
          </div>
          <div className="group-294-3">
            <div className="rectangle-117"></div>
            <img className="play-circle" src="/img/play-circle@2x.svg" />
          </div>
          <img className="exclude-6" src="/img/exclude-18@2x.svg" />
          <div className="frame-12">
            <div className="overlap-group-13 poppins-regular-normal-white-17px">
              <div className="text-5">{text5}</div>
              <div className="text-6">{text6}</div>
              <img className="rectangle-9-3" src="/img/rectangle-90@2x.svg" />
            </div>
            <div className="text-2">{text2}</div>
            <div className="overlap-group1-8 poppins-regular-normal-white-17px">
              <div className="text-3">{text3}</div>
              <div className="text-4">{text4}</div>
              <img className="rectangle-9-3" src="/img/rectangle-91@2x.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="flex-row-9">
              <div className="group-container-4">
                <img className="group-20" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-216@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
              </div>
              <div className="group-container-5">
                <img className="group-208" src="/img/group-208@2x.svg" />
                <img className="group-2-3" src="/img/group-209@2x.svg" />
                <img className="group-2-3" src="/img/group-212@2x.svg" />
                <img className="group-2-3" src="/img/group-215@2x.svg" />
                <img className="group-2-3" src="/img/group-212@2x.svg" />
                <img className="group-2-3" src="/img/group-209@2x.svg" />
                <img className="group-2-3" src="/img/group-212@2x.svg" />
                <img className="group-2-3" src="/img/group-209@2x.svg" />
                <img className="group-2-3" src="/img/group-212@2x.svg" />
              </div>
              <div className="group-container-6">
                <img className="group-20" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-214@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-214@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
                <img className="group-2-2" src="/img/group-206@2x.svg" />
              </div>
              <div className="group-234 poppins-bold-white-11px">
                <div className="a">{a}</div>
                <div className="b">{b}</div>
                <div className="group-234-item">{c}</div>
                <div className="d">{d}</div>
                <div className="e">{e}</div>
                <div className="f-1">{f}</div>
                <div className="group-234-item">{g}</div>
                <div className="h-1">{h}</div>
                <div className="i">{i}</div>
              </div>
            </div>
            <div className="group-201 poppins-regular-normal-white-11px">
              <img className="sofa-7" src="/img/sofa-7@2x.svg" />
              <div className="available">{available}</div>
              <img className="sofa-8" src="/img/sofa-8@2x.svg" />
              <div className="booked">{booked}</div>
              <img className="sofa-9" src="/img/sofa-9@2x.svg" />
              <div className="selected">{selected}</div>
            </div>
          </div>
          <div className="frame-15">
            <div className="overlap-group-14">
              <div className="confirm-17">{confirm17}</div>
            </div>
            <div className="group-237">
              <img className="iconly-bold-scan" src={iconlyBoldScan} />
            </div>
          </div>
          <div className="rectangle-116-1"></div>
          <div className="group-287">
            <img className="clock-1-1" src="/img/clock-1-1@2x.svg" />
            <div className="overlap-group2-5 poppins-bold-white-11px-2">
              <div className="text-7">{text7}</div>
              <div className="length">{length}</div>
            </div>
          </div>
          <div className="group-288">
            <img className="volume-2-1" src="/img/volume-2-1@2x.svg" />
            <div className="overlap-group3-3 poppins-bold-white-11px-2">
              <div className="language">{language}</div>
              <div className="surname">{surname}</div>
            </div>
          </div>
          <div className="read-reviews poppins-bold-white-36px">
            <span className="span0 poppins-bold-white-36px-2">{spanText3}</span>
            <span className="span1-1 poppins-bold-white-11px-2">{spanText4}</span>
            <span className="span2">{spanText5}</span>
          </div>
          <div className="frame-13">
            <div className="overlap-group2-6">
              <div className="overlap-group-15">
                <div className="wed">{wed}</div>
                <div className="number-5 productsans-regular-normal-white-15px">{number2}</div>
              </div>
              <Group182 thu={group182Props.thu} number={group182Props.number} />
              <img className="rectangle-9-4" src="/img/rectangle-90-1@2x.svg" />
            </div>
            <div className="group-183">
              <div className="fri productsans-regular-normal-white-11px">{fri}</div>
              <div className="number-6">{number3}</div>
            </div>
            <div className="group-184">
              <div className="sat">{sat}</div>
              <div className="number-7">{number4}</div>
            </div>
            <Group182 thu={group1822Props.thu} number={group1822Props.number} className={group1822Props.className} />
            <div className="overlap-group1-9">
              <Group182 thu={group1823Props.thu} number={group1823Props.number} className={group1823Props.className} />
              <div className="group-187">
                <div className="tue productsans-regular-normal-nobel-11px">{tue}</div>
                <div className="number-8 productsans-regular-normal-white-15px">{number5}</div>
              </div>
              <img className="rectangle-9-4" src="/img/rectangle-91-1@2x.svg" />
            </div>
          </div>
          <div className="overlap-group4-2">
            <img className="vector-12" src="/img/vector-12@2x.svg" />
            <img className="vector-13" src="/img/vector-13@2x.svg" />
            <div className="screen productsans-regular-normal-white-11px">{screen}</div>
          </div>
          <img className="logo-7" src={logo} />
        </div>
      </div>
    </div>
  );
}

export default TICKETS;
