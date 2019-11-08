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

// const Buttons = ({ onCreate }) => {
//   return (
//     <div className="Buttons">
//       <div className="btn add" onClick={onCreate}>
//         생성
//       </div>
//     </div>
//   );
// };

// Buttons.propTypes = {
//   onCreate: PropTypes.func
// };

// Buttons.defaultProps = {
//   onCreate: () => console.warn("onCreate not defined")
// };

// export default Buttons;

export default floatingButton;
