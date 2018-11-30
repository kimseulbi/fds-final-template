import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Redirect-다른곳으로 보내버리는 페이지
// 부작용을 이르키는 컴포넌트이다.
// 사용자가 무언가를 하지않아도 화면을 전환을 해야될떄 사용
export default class HearderView extends Component {
  render() {
    const { username, logout, history } = this.props;
    // 화면이 제대로 안나가는 경우가 싶습니다.
    // headerview가 제대로 변경이 안됩니다. 메인페이지에서 메인페이지로 이동하라고 해서 상태가 변경 되지 않았기 떼문에
    // key 값으로 해결 가능
    return (
      <div>
        <Link to="/">쇼핑몰</Link>
        {username ? (
          <>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                history.push('/');
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    );
  }
}
