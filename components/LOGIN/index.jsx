import React from "react";
import Group37 from "../Group37";
import Facebook from "../Facebook";
import "./LOGIN.css";

function LOGIN(props) {
  const {
    overlapGroup1,
    logo,
    signIn,
    ifYouDontHaveAnAccount,
    spanText,
    spanText2,
    password,
    enterYourPassword,
    rememebrMe,
    forgotPassword,
    login,
    orContinueWith,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login screen">
        <div className="overlap-group1-3" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <div className="group-48">
            <div className="group-47">
              <div className="overlap-group-3">
                <div className="ellipse-1"></div>
                <img className="play-button-1" src="/img/play-button-1@2x.svg" />
              </div>
            </div>
          </div>
          <img className="logo-2" src={logo} />
        </div>
        <div className="group-43">
          <div className="group-41">
            <div className="group-34">
              <div className="sign-in poppins-medium-white-30px">{signIn}</div>
              <div className="group-2">
                <p className="if-you-dont-have-an-account poppins-regular-normal-white-16px">
                  {ifYouDontHaveAnAccount}
                </p>
                <p className="you-can-register-here poppins-regular-normal-white-16px-2">
                  <span className="poppins-regular-normal-white-16px">{spanText}</span>
                  <span className="poppins-semi-bold-chateau-green-16px">{spanText2}</span>
                </p>
              </div>
            </div>
            <div className="group-40">
              <div className="group-38">
                <Group37 />
                <div className="group-36">
                  <div className="flex-row-2">
                    <div className="flex-col-5">
                      <div className="password poppins-medium-white-13px">{password}</div>
                      <div className="group-35">
                        <img className="padlock-1" src="/img/padlock-1@2x.svg" />
                        <div className="enter-your-password poppins-regular-normal-white-16px">{enterYourPassword}</div>
                      </div>
                    </div>
                    <img className="invisible-1" src="/img/invisible-1@2x.svg" />
                  </div>
                  <div className="rectangle-9"></div>
                </div>
              </div>
              <div className="group-24 poppins-light-white-12px">
                <div className="rectangle-5"></div>
                <div className="rememebr-me">{rememebrMe}</div>
                <div className="forgot-password">{forgotPassword}</div>
              </div>
              <div className="overlap-group-4">
                <div className="login-1 poppins-medium-white-17px">{login}</div>
              </div>
            </div>
          </div>
          <div className="or-continue-with">{orContinueWith}</div>
          <div className="group-13">
            <Facebook />
            <img className="google" src="/img/google@2x.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LOGIN;
