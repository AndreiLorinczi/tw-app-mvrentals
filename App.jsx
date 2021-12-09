import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HOME from "./components/HOME";
import DISCOVER from "./components/DISCOVER";
import LOGIN from "./components/LOGIN";
import REGISTER from "./components/REGISTER";
import UPCOMING from "./components/UPCOMING";
import PROFILE from "./components/PROFILE";
import ADMIN from "./components/ADMIN";
import TICKETS from "./components/TICKETS";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HOME {...hOMEData} />
        </Route>
        <Route path="/discover">
          <DISCOVER {...dISCOVERData} />
        </Route>
        <Route path="/login">
          <LOGIN {...lOGINData} />
        </Route>
        <Route path="/register">
          <REGISTER {...rEGISTERData} />
        </Route>
        <Route path="/upcoming">
          <UPCOMING {...uPCOMINGData} />
        </Route>
        <Route path="/profile">
          <PROFILE {...pROFILEData} />
        </Route>
        <Route path="/:path(|admin)">
          <ADMIN {...aDMINData} />
        </Route>
        <Route path="/tickets">
          <TICKETS {...tICKETSData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const iconlyBulkArrowLeftCircle2Data = {
    className: "iconly-bulk-arrow-right-circle",
};

const searchBoxData = {
    typeToSearchForAMovie: "Type to search for a movie...",
};

const hOMEData = {
    place: "Home",
    upcoming: "Upcoming",
    logo: "/img/logo-1@4x.png",
    title: "Now in cinema...",
    rectangle: "/img/rectangle-1@2x.png",
    name1: "Name 1",
    rectangle2: "/img/rectangle-5@2x.png",
    name2: "Name 2",
    rectangle3: "/img/rectangle-4@2x.png",
    name3: "Name 3",
    rectangle4: "/img/rectangle-2@2x.png",
    name4: "Name 4",
    rectangle5: "/img/rectangle-3@2x.png",
    name5: "Name 5",
    rectangle6: "/img/rectangle@2x.png",
    name6: "Name 6",
    group294: "/img/d655ftf19-r5-12-2000x390px-lava-dymc-rom-r1-master-rev-1--1--1@1x.png",
    iconlyBulkArrowLeftCircleProps: iconlyBulkArrowLeftCircle2Data,
    searchBoxProps: searchBoxData,
};

const group2862Data = {
    className: "group-286-1",
};

const group2842Data = {
    className: "group-284-1",
};

const searchBox3Data = {
    articleNameOrKeywords: "Article name or keywords...",
};

const dropDownData = {
    allCategories: "All categories",
};

const buttonData = {
    children: "Search",
};

const dropDownInvertedData = {
    vid: "Come",
};

const dropDownListData = {
    all: "All",
    videoInterviews: "Comedy",
    musicVideos: "Dramas",
    netflixReviews: "Documentary",
};

const dropdownListData = {
    dropDownInvertedProps: dropDownInvertedData,
    dropDownListProps: dropDownListData,
};

const group2962Data = {
    className: "group-296",
};

const group2612Data = {
    className: "group-261-4",
};

const dISCOVERData = {
    union: "/img/union@2x.png",
    discover: "Discover",
    place: "Home",
    upcoming: "Upcoming",
    logo: "/img/logo@4x.png",
    spanText: "Because you searched for ",
    spanText2: "comedies",
    rectangle: "/img/rectangle-1@2x.png",
    name1: "Name 1",
    rectangle2: "/img/rectangle-5@2x.png",
    name2: "Name 2",
    rectangle3: "/img/rectangle-4@2x.png",
    name3: "Name 3",
    rectangle4: "/img/rectangle-2@2x.png",
    name4: "Name 4",
    rectangle5: "/img/rectangle-3@2x.png",
    name5: "Name 5",
    rectangle6: "/img/rectangle@2x.png",
    name6: "Name 6",
    seeAll: "See all",
    searchBoxProps: group2862Data,
    searchBoxProps2: group2842Data,
    searchBoxProps3: searchBox3Data,
    dropDownProps: dropDownData,
    buttonProps: buttonData,
    dropdownListProps: dropdownListData,
    buttonProps2: group2962Data,
    searchBoxProps4: group2612Data,
};

const lOGINData = {
    overlapGroup1: "/img/rectangle-11@1x.png",
    logo: "/img/logo-1@4x.png",
    signIn: "Sign in",
    ifYouDontHaveAnAccount: "If you don’t have an account",
    spanText: "You can ",
    spanText2: "Register here !",
    password: "Password",
    enterYourPassword: "Enter your Password",
    rememebrMe: "Rememebr me",
    forgotPassword: "Forgot Password ?",
    login: "Login",
    orContinueWith: "or continue with",
};

const group372Data = {
    className: "group-37-1",
};

const group3722Data = {
    username: "Username",
    enterYourUserName: "Enter your User name",
};

const rEGISTERData = {
    logo: "/img/logo@4x.png",
    signUp: "Sign up",
    ifYouAlreadyHaveAnAccount: "If you already have an account ..",
    spanText: "You can ",
    spanText2: "Login here !",
    password: "Password",
    enterYourPassword: "Enter your Password",
    confrimPassword: "Confrim Password",
    confrimYourPassword: "Confrim your Password",
    place: "Register",
    group37Props: group372Data,
    group372Props: group3722Data,
};

const group2613Data = {
    className: "group-261-7",
};

const group2614Data = {
    className: "group-292",
};

const uPCOMINGData = {
    union: "/img/clock-1@2x.svg",
    upcoming: "Upcoming",
    logo: "/img/logo-1@4x.png",
    spanText: "Arriving this ",
    spanText2: "year",
    rectangle: "/img/rectangle-1@2x.png",
    name1: "Name 1",
    rectangle2: "/img/rectangle-5@2x.png",
    name2: "Name 2",
    rectangle3: "/img/rectangle-4@2x.png",
    name3: "Name 3",
    rectangle4: "/img/rectangle-2@2x.png",
    name4: "Name 4",
    rectangle5: "/img/rectangle-3@2x.png",
    name5: "Name 5",
    rectangle6: "/img/rectangle@2x.png",
    name6: "Name 6",
    spanText3: "Premieres this ",
    spanText4: "month",
    rectangle7: "/img/rectangle-14@2x.png",
    name12: "Name 1",
    rectangle8: "/img/rectangle-18@2x.png",
    name22: "Name 2",
    rectangle9: "/img/rectangle-17@2x.png",
    name32: "Name 3",
    rectangle10: "/img/rectangle-15@2x.png",
    name42: "Name 4",
    rectangle11: "/img/rectangle-16@2x.png",
    name52: "Name 5",
    rectangle12: "/img/rectangle-13@2x.png",
    name62: "Name 6",
    group261Props: group2613Data,
    group2612Props: group2614Data,
};

const group2864Data = {
    className: "group-286-3",
};

const group2853Data = {
    className: "group-285-2",
};

const menu3Data = {
    logo: "/img/logo-1@4x.png",
    group286Props: group2864Data,
    group285Props: group2853Data,
};

const home2Data = {
    className: "home-7",
};

const pROFILEData = {
    upcoming: "Upcoming",
    save: "Save",
    overlapGroup2: "/img/vector-abstract-noise-seamless-pattern-1@2x.png",
    totalWatchTime: "Total watch time",
    number: "742",
    h: "h",
    overlapGroup3: "/img/vector-abstract-noise-seamless-pattern-1@2x.png",
    totalReviews: "Total reviews",
    number2: "23",
    overlapGroup4: "/img/vector-abstract-noise-seamless-pattern-1@2x.png",
    ticketsBooked: "Tickets booked",
    number3: "20",
    overlapGroup5: "/img/vector-abstract-noise-seamless-pattern-1@2x.png",
    watchedMovies: "Watched movies",
    number4: "14",
    userName: "User name:",
    password: "Password:",
    email: "Email:",
    gender: "Gender:",
    birthdate: "Birthdate:",
    userpopescu: "USERPOPESCU",
    text1: "**********",
    popescuIonCom: "popescu@ion.com",
    female: "Female",
    male: "Male",
    date: "08/02/1997",
    menuProps: menu3Data,
    homeProps: home2Data,
};

const group2865Data = {
    className: "group-286-4",
};

const group2854Data = {
    className: "group-285-3",
};

const menu32Data = {
    logo: "/img/logo@4x.png",
    className: "menu-5",
    group286Props: group2865Data,
    group285Props: group2854Data,
};

const home3Data = {
    className: "home-9",
};

const user2Data = {
    className: "user-5",
};

const group2963Data = {
    className: "group-292-1",
};

const aDMINData = {
    addChosenOption: "Add / chosen option..",
    upcoming: "Upcoming",
    futureFunctionsToBeAdded: "Future functions to be added...",
    admin: "Admin",
    manageMovies: "Manage movies",
    postponeDelayMovie: "Postpone/delay movie",
    options: "Options",
    addMovie: "Add movie",
    removeMovie: "Remove movie",
    placeholderForForm: "Placeholder for form.. in case of adding a movie",
    removingViaSearchingInDb: "Removing via searching in db...",
    placeholderForForm2: "Placeholder for form .. delay based on admin input",
    menuProps: menu32Data,
    homeProps: home3Data,
    userProps: user2Data,
    group296Props: group2963Data,
};

const group2855Data = {
    className: "group-285-4",
};

const group2844Data = {
    className: "group-284-3",
};

const home4Data = {
    className: "home-11",
};

const group182Data = {
    thu: "Thu",
    number: "22",
};

const group1822Data = {
    thu: "Sun",
    number: "25",
    className: "group-185",
};

const group1823Data = {
    thu: "Mon",
    number: "26",
    className: "group-186",
};

const tICKETSData = {
    rectangle: "/img/rectangle-19@2x.png",
    tickets: "Tickets",
    spanText: <>Watch <br /></>,
    spanText2: "trailer",
    numeFilm: "Nume film",
    upcoming: "Upcoming",
    year: "Year",
    number: "2021",
    text5: "16:30",
    text6: "14:00",
    text2: "18:30",
    text3: "21:00",
    text4: "23:00",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    available: "Available",
    booked: "Booked",
    selected: "Selected",
    confirm17: "Confirm 17$",
    iconlyBoldScan: "/img/iconly-bold-scan@21.329999923706055x.png",
    text7: "2:31:30",
    length: "Length",
    language: "Language",
    surname: "English",
    spanText3: "Read",
    spanText4: <> <br /></>,
    spanText5: "reviews",
    wed: "Wed",
    number2: "21",
    fri: "Fri",
    number3: "23",
    sat: "Sat",
    number4: "24",
    tue: "Tue",
    number5: "27",
    screen: "SCREEN",
    logo: "/img/logo@4x.png",
    group285Props: group2855Data,
    group284Props: group2844Data,
    homeProps: home4Data,
    group182Props: group182Data,
    group1822Props: group1822Data,
    group1823Props: group1823Data,
};

