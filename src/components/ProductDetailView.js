import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
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
  };
  // 이페이지에서만 사용하는 상태라면 view에 두어도 된다.
  // UI 상태를 변경은 view에 두어도 된다.
  constructor(props) {
    super(props);
    // 선택된 id를 저장함
    // 장바구니 저장들 위해서 옵션id가 필요하기 때문에
    this.state = {
      quantity: 1,
      selectedOptionId: null,
    };
  }
  async componentDidMount() {
    this.setState({
      quantity: 1,
      selectedOptionId: '',
    });
  }

  handlsOptionChange(e) {
    this.setState({
      selectedOptionId: parseInt(e.target.value),
    });
  }
  handleQuantiyChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
  }
  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    const { quantity, selectedOptionId } = this.state;
    // 첫페이지에서는 undfind
    const selectedOption = options.find(o => o.id === selectedOptionId);
    const totalPrice = selectedOption && selectedOption.price * quantity;
    return (
      <div>
        <select
          value={selectedOptionId}
          onChange={e => this.handlsOptionChange(e)}
        >
          {options.map(o => (
            <option value={o.id}>{o.title}</option>
          ))}
        </select>
        <input
          type="number"
          value={quantity}
          onChange={e => this.handleQuantiyChange(e)}
        />
        <div>가격: {totalPrice}</div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
