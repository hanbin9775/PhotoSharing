import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./floatingButton.css";
import GroupForm from "./GroupForm";

const floatingButton = () => (
  <Popup
    trigger={open => <button className="button"> Add </button>}
    position="bottom right"
    modal
    closeOnDocumentClick
  ></Popup>
);

export default floatingButton;
