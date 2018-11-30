import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  // 모양과 기능이 같으면 경로는 같게 한다.
  // 쿼리 스트링은 다르게 해준다.
  // 경로는 계층구조를 나타내는데 데이터를 나태려면 힘들다.
  // 경로로 포함시키기 좋은 데이터가 있고 계층구조가 아니라면 쿼리스트링을 사용.
  render() {
    const { location } = this.props;
    console.log(location.search);
    // 브라우저 지원이 만히 없음 그래서 qs 라이브러리를 많이 사용 합니다.
    const p = new URLSearchParams(location.search);
    // key가 변경 되지않으면 다시 호출 되지 않으며 상태를 초기화 하고 싶다면 key값을 변경한다.
    const category = p.get('category');
    console.log(p.get('category'));
    return (
      <Layout>
        <h1>Home</h1>
        <Link to="/">ALL</Link>
        <Link to="/?category=top">TOP</Link>
        <Link to="/?category=pants">PANTS</Link>
        <ProductList key={category} category={p.get('category')} />
      </Layout>
    );
  }
}
