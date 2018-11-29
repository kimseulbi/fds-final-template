import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Link to="/">쇼핑몰</Link>
        <Link to="/login">로그인</Link>
        {this.props.children}
        <div>저작권은 김슬비에게 있습니다.</div>
      </div>
    );
  }
}
