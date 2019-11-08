import React, { Component } from "react";
import "./floatingButton.css";

class floatingButton extends Component {
  handleOnClick = () => {
    console.log("Click");
  };
  render() {
    return (
      <div className="floatBox">
        <div className="floatBtn">
          <button onClick={this.handleOnClick}>
            <img
              src={require("../components/images/eng-tele.png")}
              alt="hero-image"
              width={90}
            />
          </button>
        </div>
      </div>
    );
  }
}

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
