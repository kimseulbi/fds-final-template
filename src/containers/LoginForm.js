import React, { Component } from 'react';
import LoginFormView from '../components/LoginFormView';
import { withUser } from '../contexts/UserContext';

class LoginForm extends Component {
  static defaultProps = {
    login: (username, password) => {},
  };
  constructor(props) {
    super(props);
    const username = e.target.elements.username.value;
  }
  render() {
    const { login } = this.props;
    return <LoginFormView onLogi={login} />;
  }
}

export default withUser(LoginForm);
