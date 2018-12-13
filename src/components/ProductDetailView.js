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
    // 장바구니 항목 추가 시 호출되는 함수
    // 옵션 id와 수량을 인수로 넘겨야 함
    onCreateCartItem: () => {},
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
      // 제어되는 컴퍼넌트에 강력함 ?
      quantity: 1,
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
    console.log('제품: ', selectedOption);
    // 옵션에 disabled selected를 사용 했지만 react는 select보다는 defaultValue  나  value를 사용하는것이 좋다.
    // vaule prop에 사용 하면 안된다.제어되는 컴포넌트에 null을 넘기면 안됩니다.
    return (
      <div>
        <select
          value={selectedOptionId}
          onChange={e => this.handlsOptionChange(e)}
          required
        >
          <option disabled value="">
            옵션을 선택하세요
          </option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={quantity}
          onChange={e => this.handleQuantiyChange(e)}
          min="1"
          max="10"
        />
        <div>가격: {totalPrice}</div>
        <button
          onClick={() => {
            const { selectedOption, quantity } = this.state;
            if (selectedOption === '') {
              alert('옵션을 선택하세요.');
            } else if (quantity < 1) {
              alert('1 이상의 수량을 입력하세요.');
            } else {
              this.props.onCreateCartItem(selectedOptionId, quantity);
            }
          }}
        >
          장바구니에 담기
        </button>
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
