import React, { Component } from 'react';
import ProductDetail from '../containers/ProductDetail';

// prop도 받고 상태도 가지고 있음
export default class ProductPage extends Component {
  render() {
    const { match } = this.props;
    const productId = match.params.productId;
    return (
      <div>
        <ProductDetail productId={productId} />
      </div>
    );
  }
}
