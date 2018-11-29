import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../containers/Header';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <div>저작권은 김슬비에게 있습니다.</div>
      </div>
    );
  }
}
