import React from "react";
import PropTypes from "prop-types";

import "./Buttons.css";

const Buttons = ({ onCreate }) => {
  return (
    <div className="floatBox">
      <div className="floatBtn" onClick={onCreate}>
        <img
          src={require("../components/images/eng-tele.png")}
          alt="hero-image"
          width={90}
        />
      </div>
    </div>
  );
};

Buttons.propTypes = {
  onCreate: PropTypes.func
};

Buttons.defaultProps = {
  onCreate: () => console.warn("onCreate not defined")
};

export default Buttons;
