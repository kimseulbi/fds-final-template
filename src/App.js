import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import UserProvider from './contexts/UserContext';

// 주소연결 !!! 라우터
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            {/* 스위치나 라우트 컴포넌트 사용시 주의 */}
            {/* exact prop이 있을 때 = 주소가 정확히 일치해야만 페이지가 그려짐 */}
            {/* exact prop이 없을 때 = 주소가 path로 시작하면 페이지가 그려짐 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/login" component={LoginPage} />
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
