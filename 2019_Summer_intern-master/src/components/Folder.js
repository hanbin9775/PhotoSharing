import React, { Component } from "react";
import GroupInfo from "./GroupInfo";
import styled, { keyframes } from "styled-components";

class Folder extends Component {
  static defaultProps = {
    info: {
      name: this.name,
      password: this.password
    }
  };

  state = {
    name: this.name,
    password: this.password
  };

  render() {
    const style = {
      padding: "8px",
      margin: "8px"
    };

    // 일반모드
    const { name, password } = this.props.info;
    return (
      <img
        src={this.state.url || "http://via.placeholder.com/400x300"}
        // src={require("./images/animatedcamera.gif")}
        alt="업로드 하기 전입니당"
        width="400"
      />
    );
  }
}
export default Folder;
