import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text" style={{ color: "#882170", fontSize: "0.7em" }}>
              @2022 Sufi ironic
            </p>
            <p className="p-text" style={{ color: "#882170", fontSize: "0.7em" }}>
              All rights reserved
            </p>
            <a href="https://taupe-moonbeam-ec9de1.netlify.app"><p className="p-text" style={{ color: "#882170", fontSize: "0.7em" }}>
              developed by Jamil.
            </p></a>     
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
