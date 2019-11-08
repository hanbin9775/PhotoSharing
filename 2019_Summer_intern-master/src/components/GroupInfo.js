import React, { Component } from "react";

import styled, { keyframes } from "styled-components";
import { storage } from "../firebase";
import firebase from "firebase";
import { Link as Link2 } from "react-router-dom";

const Container = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-position: center;
  height: 130px;
  width: 500px;
  position: relative;
  border: 2px solid gray;
`;

class GroupInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      password: "0000",
      id: 0
    }
  };

  state = {
    // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
    // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
    // input 형태로 보여주게 됩니다.
    editing: false,
    // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
    // 설정합니다
    name: "",
    password: ""
  };

  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  // editing 값을 반전시키는 함수입니다
  // true -> false, false -> true
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  // input 에서 onChange 이벤트가 발생 될 때
  // 호출되는 함수입니다
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
    // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
    // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.

    const { info, onUpdate } = this.props;
    if (!prevState.editing && this.state.editing) {
      // editing 값이 false -> true 로 전환 될 때
      // info 의 값을 state 에 넣어준다
      this.setState({
        name: info.name,
        password: info.password
      });
    }

    if (prevState.editing && !this.state.editing) {
      // editing 값이 true -> false 로 전환 될 때
      onUpdate(info.id, {
        name: this.state.name,
        password: this.state.password
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
    if (
      !this.state.editing &&
      !nextState.editing &&
      nextProps.info === this.props.info
    ) {
      return false;
    }
    // 나머지 경우엔 리렌더링함
    return true;
  }

  render() {
    const style = {
      padding: "8px",
      margin: "8px"
    };
    var database = firebase.database();

    const { editing } = this.state;

    if (editing) {
      // 수정모드
      return (
        <Container>
          <div>
            <div style={style}>
              <input
                value={this.state.name}
                name="name"
                placeholder="이름"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                value={this.state.password}
                name="password"
                placeholder="비밀번호"
                onChange={this.handleChange}
              />
            </div>
            <div className="btn" onClick={this.handleToggleEdit}>
              적용
            </div>
            <div className="btn" onClick={this.handleRemove}>
              삭제
            </div>
          </div>
        </Container>
      );
    }

    // 일반모드
    const { name, password } = this.props.info;

    var database = firebase.database();
    var dirname = name; //이름
    var passwd = password;
    var count;

    firebase
      .database()
      .ref("size/1")
      .once("value")
      .then(function(snapshot) {
        database.ref("size/1").set({ num: snapshot.val().num + 1 });
        count = snapshot.val().num + 1;

        database.ref("users/" + count).set({ dirname: name, passwd: password });
      });

    return (
      <Container>
        <div style={style} className="p-font-MiSaeng">
          <div>
            <h1>
              <Link2 to="/Folder">{name}</Link2>
            </h1>
          </div>
          {/* <div>{password}</div> */}
          <h4>
            <div className="btn" onClick={this.handleToggleEdit}>
              수정
            </div>
            &nbsp;
            <div className="btn" onClick={this.handleRemove}>
              삭제
            </div>
          </h4>
        </div>
      </Container>
    );
  }
}

export default GroupInfo;
