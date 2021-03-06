import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      success: false, //로그인 성공 여부를 상태값으로 저장
    };
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    await onLogin(username, password);
    // 로그인이 성공적으로 끝났을 때
    this.setState({
      success: true,
    });
    // Redirect 컴포넌트를 렌더링 -> 주소표시줄의 상태가 바뀜
  }

  render() {
    const { username, password, success } = this.state;
    // 여기 상태는 나가지면 로그인 페이지로 들어갈수 있지 않나?
    if (success) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <input
          type="text"
          value={username}
          onChange={e => this.handleUsernameChange(e)}
        />
        <input
          type="password"
          value={password}
          onChange={e => this.handlePasswordChange(e)}
        />
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
      </div>
    );
  }
}
