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
      options: [
        // {
        //   id: 1,
        //   productId: 1,
        //   title: 'Medium',
        //   price: 30000,
        // },
      ],
      // 장바구니 항목 추가 시 호출되는 함수
      // 옵션 id의 수량을 인수로 넘겨야함.
      onCreateCartItem: () => {},
    };
  }
  async componentDidMount() {
    const { productId } = this.props;
    const { data: product } = await api.get('/products/' + productId, {
      params: {
        _embed: 'options',
      },
    });
    this.setState({
      ...product,
      loading: false,
    });
  }
  // 서버측 장바구니에 항목을 추가하는 함수
  handleCreateCartItem = async (optionId, quantity) => {
    //...
    alert(`장바구니 테스트, ${optionId}, ${quantity}`);
  };
  // this를 고정 시킬수 있다면 화살표함수를 사용 하지 않고 사용 합니다.
  // 1. {this.handleCreateCartItem.bind(this)}
  // 2. 위쪽에서 화살표를 사용 한다면 아래에서 bind를 사용 하지 않습니다.
  // 다른함수이거나 넘겨야할 경우라면 미리 화살표 함수로 만들어줍니다.
  render() {
    return (
      <div>
        <ProductDetailView
          onCreateCartItem={this.handleCreateCartItem}
          {...this.state}
        />
      </div>
    );
  }
}
