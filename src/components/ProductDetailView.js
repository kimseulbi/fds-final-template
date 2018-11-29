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
  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    return (
      <div>
        <select>
          {options.map(o => (
            <option value={o.id}>{o.title}</option>
          ))}
        </select>
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
