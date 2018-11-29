import React, { Component } from 'react';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
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

  handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    onLogin(username, password);
  }

  render() {
    const { username, password } = this.state;
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
        <button onClick={() => this.handleLoginButton()}>로그인</button>
      </div>
    );
  }
}
