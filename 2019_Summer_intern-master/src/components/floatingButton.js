import React, { Component } from "react";
import "./floatingButton.css";

class floatingButton extends Component {
  render() {
    return (
      <div className="floatBox">
        <div className="floatBtn floatTop">
          <a
            href="https://open.kakao.com/o/gyiFnGfb"
            className="float-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../components/images/kor-kakao.png")}
              alt="hero-image"
              width={90}
            />
          </a>
        </div>
        <div className="floatBtn">
          <a
            href="https://t.me/trustverse_officialchannel"
            class="float-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../components/images/eng-tele.png")}
              alt="hero-image"
              width={90}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default floatingButton;
