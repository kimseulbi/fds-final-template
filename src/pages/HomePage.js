import React, { Component } from 'react';
import ProductList from '../containers/ProductList';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
         <ProductList/>
      </div>
    );
  }
}