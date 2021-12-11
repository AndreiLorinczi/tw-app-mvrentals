import React from "react";
import Group47 from "../Group47";
import Group37 from "../Group37";
import Group372 from "../Group372";
import "./REGISTER.css";

function REGISTER(props) {
  const {
    logo,
    signUp,
    ifYouAlreadyHaveAnAccount,
    spanText,
    spanText2,
    password,
    enterYourPassword,
    confrimPassword,
    confrimYourPassword,
    place,
    group47Props,
    group37Props,
    group372Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="register screen">
        <div className="overlap-group3-1">
          <div className="group-48-1"></div>
          <img className="logo-3" src={logo} />
          <Group47 className={group47Props.className} />
        </div>
        <div className="group-44">
          <div className="group-34-1">
            <div className="sign-up poppins-medium-white-30px">{signUp}</div>
            <div className="group-2-1">
              <p className="if-you-already-have-an-account poppins-regular-normal-white-16px">
                {ifYouAlreadyHaveAnAccount}
              </p>
              <p className="you-can-login-here poppins-regular-normal-white-16px-2">
                <span className="poppins-regular-normal-white-16px">{spanText}</span>
                <span className="poppins-semi-bold-chateau-green-16px">{spanText2}</span>
              </p>
            </div>
          </div>
          <Group37 className={group37Props.className} />
          <div className="overlap-group1-4">
            <Group372 username={group372Props.username} enterYourUserName={group372Props.enterYourUserName} />
            <img className="user-1-1" src="/img/user-1@2x.svg" />
          </div>
          <div className="group">
            <div className="flex-row-6">
              <div className="flex-col-6">
                <div className="password-1 poppins-medium-white-13px">{password}</div>
                <div className="group-35-1">
                  <img className="padlock-1-1" src="/img/padlock-1-1@2x.svg" />
                  <div className="enter-your-password-1 poppins-regular-normal-white-16px">{enterYourPassword}</div>
                </div>
              </div>
              <img className="invisible-1-1" src="/img/invisible-1-1@2x.svg" />
            </div>
            <div className="rectangle-9-1"></div>
          </div>
          <div className="group">
            <div className="flex-row-7">
              <div className="flex-col-7">
                <div className="password-1 poppins-medium-white-13px">{confrimPassword}</div>
                <div className="group-35-2">
                  <img className="padlock-1-2" src="/img/padlock-1-1@2x.svg" />
                  <div className="confrim-your-password poppins-regular-normal-white-16px">{confrimYourPassword}</div>
                </div>
              </div>
              <img className="invisible-1-2" src="/img/invisible-1-1@2x.svg" />
            </div>
            <div className="rectangle-9-2"></div>
          </div>
          <div className="overlap-group-5">
            <div className="place-2 poppins-medium-white-17px">{place}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default REGISTER;
