import React, { Component, PropTypes } from "react";

const propTypes = {
  onChangeLangeConvertKOR: createWarning("onChangeLangeConvertKOR"),
  onChangeLangeConvertENG: createWarning("onChangeLangeConvertENG")
};

function createWarning(funcName) {
  return () => console.warn(funcName + " is not defined");
}

const defaultProps = {
  onChangeLangeConvertKOR: createWarning("onChangeLangeConvertKOR"),
  onChangeLangeConvertENG: createWarning("onChangeLangeConvertENG")
};

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "ENG" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value == "ENG") {
      return this.props.onChangeLangeConvertENG();
    } else if (event.target.value == "KOR") {
      return this.props.onChangeLangeConvertKOR();
    }
  }

  render() {
    return (
      <select
        id="langages"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <option value="ENG">ENG</option>
        <option value="KOR">KOR</option>
      </select>
    );
  }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
