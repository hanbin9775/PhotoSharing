import React from "react";
import PropTypes from "prop-types";
import "./Counter.css";

const Counter = ({ number, index }) => {
  return (
    <div>
      <div className="press-logo m-bottom-10">
        <img
          className="img-fluid"
          src={require("./images/press/Press_Box_NEW_Article1.png")}
          alt="press-logo"
        />
      </div>
      &nbsp;
      {/* {number}
      {index} */}
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number
};

Counter.defaultProps = {
  index: 0,
  number: 0
};

export default Counter;
