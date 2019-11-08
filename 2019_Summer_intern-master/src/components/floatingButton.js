import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./floatingButton.css";

const floatingButton = () => (
  <Popup
    trigger={open => <button className="button"> Add </button>}
    position="bottom right"
    modal
    closeOnDocumentClick
  >
    <span>{<input type="text" placeholder="Folder Name " />}</span>
    <span>{<input type="text" placeholder="Password" />}</span>
    <div className="actions">
      <Popup
        trigger={<button className="button"> Submit </button>}
        position="bottom right"
        closeOnDocumentClick
      ></Popup>
    </div>
  </Popup>
);

export default floatingButton;
