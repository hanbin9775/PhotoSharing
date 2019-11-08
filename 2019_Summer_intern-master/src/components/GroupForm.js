// file: src/components/PhoneForm.js
import React, { Component } from "react";

class GroupForm extends Component {
  state = {
    name: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: "",
      password: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="비밀번호"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default GroupForm;