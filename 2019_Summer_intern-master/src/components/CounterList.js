import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

import "./CounterList.css";

const CounterList = ({ counters }) => {
  const counterList = counters.map((counter, i) => (
    <Counter key={i} index={i} {...counter} />
  ));

  return <div className="CounterList">{counterList}</div>;
};

CounterList.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number
    })
  )
};

CounterList.defaultProps = {
  counters: []
};

export default CounterList;
