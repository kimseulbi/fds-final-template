import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  static defaultPros = {
    // 표시해주어야 하는 상품의 id
    productId: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: null,
      title: '',
      description: '',
      mainImgUrl: '',
      detailImgUrls: [],
    };
  }
  async componentDidMount() {
      const { productId } = this.props;
      const { data: product } = await api.get('/products/' + productId);
    this.setState({
      ...product,
      loading: false,
    });
  }
  render() {
    const product = {
      id: 1,
      title: '자켓', 
      description: '따듯해요',
      mainImgUrl: '',
      detailImgUrls: [''],
    };
    return (
      <div>
        <ProductDetailView {...this.state} />
      </div>
    );
  }
}
