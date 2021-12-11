import React from "react";
import Group286 from "../Group286";
import Group284 from "../Group284";
import SearchBox3 from "../SearchBox3";
import DropDown from "../DropDown";
import Button from "../Button";
import DropdownList from "../DropdownList";
import Cinema from "../Cinema";
import Group261 from "../Group261";
import "./DISCOVER.css";

function DISCOVER(props) {
  const {
    union,
    discover,
    place,
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
    seeAll,
    searchBoxProps,
    searchBoxProps2,
    searchBoxProps3,
    dropDownProps,
    buttonProps,
    dropdownListProps,
    buttonProps2,
    searchBoxProps4,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="discover-5 screen">
        <div className="overlap-group7">
          <div className="overlap-group8">
            <div className="overlap-group1-1">
              <div className="menu-2">
                <img className="union-3" src={union} />
                <div className="overlap-group-1">
                  <img className="menu-3" src="/img/menu@1x.svg" />
                  <Group286 className={searchBoxProps.className} />
                  <img className="union-4" src="/img/union-1@1x.svg" />
                  <div className="group-285-1">
                    <img className="compass-1-5" src="/img/compass-1@2x.svg" />
                    <div className="discover-6 poppins-light-chateau-green-20px">{discover}</div>
                  </div>
                  <Group284 className={searchBoxProps2.className} />
                </div>
              </div>
              <div className="home-3">
                <img className="home-4" src="/img/home@2x.svg" />
                <div className="place-1 poppins-light-white-20px">{place}</div>
              </div>
              <div className="upcoming-1 poppins-light-white-20px">{upcoming}</div>
              <img className="clock-1" src="/img/clock@2x.svg" />
            </div>
            <img className="logo-1" src={logo} />
          </div>
          <div className="flex-col-3">
            <div className="flex-row-1">
              <div className="overlap-group5">
                <div className="search-module">
                  <div className="search-components">
                    <SearchBox3 articleNameOrKeywords={searchBoxProps3.articleNameOrKeywords} />
                    <DropDown allCategories={dropDownProps.allCategories} />
                    <Button>{buttonProps.children}</Button>
                  </div>
                </div>
                <DropdownList
                  dropDownInvertedProps={dropdownListProps.dropDownInvertedProps}
                  dropDownListProps={dropdownListProps.dropDownListProps}
                />
              </div>
              <Cinema className={buttonProps2.className} />
            </div>
            <div className="searches">
              <div className="overlap-group6">
                <div className="group-275-1">
                  <div className="because-you-searched-for-comedies dmsans-bold-white-36px-2">
                    <span className="span dmsans-bold-white-36px">{spanText}</span>
                    <span className="span dmsans-bold-chateau-green-36px">{spanText2}</span>
                  </div>
                  <div className="flex-row-2">
                    <div className="flex-col-4">
                      <img className="rectangle-1" src={rectangle} />
                      <div className="name-1-1 dmsans-bold-white-24px">{name1}</div>
                    </div>
                    <div className="flex-col-2">
                      <img className="rectangle-1" src={rectangle2} />
                      <div className="name-2 dmsans-bold-white-24px">{name2}</div>
                    </div>
                    <div className="flex-col-2">
                      <img className="rectangle-1" src={rectangle3} />
                      <div className="name-2 dmsans-bold-white-24px">{name3}</div>
                    </div>
                    <div className="flex-col-2">
                      <img className="rectangle-1" src={rectangle4} />
                      <div className="name-2 dmsans-bold-white-24px">{name4}</div>
                    </div>
                    <div className="flex-col-2">
                      <img className="rectangle-1" src={rectangle5} />
                      <div className="name-2 dmsans-bold-white-24px">{name5}</div>
                    </div>
                    <div className="flex-col-2">
                      <img className="rectangle-1" src={rectangle6} />
                      <div className="name-6-1 dmsans-bold-white-24px">{name6}</div>
                    </div>
                  </div>
                </div>
                <div className="see-all dmsans-bold-white-24px">{seeAll}</div>
              </div>
              <Group261 className={searchBoxProps4.className} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DISCOVER;
