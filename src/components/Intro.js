import React, { Component } from "react";
import { TsLogo } from "react-tradeshift-ui";
import "../styles/Intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div data-ts="Board">
          <div data-ts="Panel">
            <TsLogo id="logo" />
            <h1>
              Enter the triangle side lengths and Bill will decide the type!
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
