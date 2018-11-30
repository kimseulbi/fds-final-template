import React from 'react';
import { withUser, UserConsumer } from '../contexts/UserContext';
import HearderView from '../components/HearderView';
import { withRouter } from 'react-router-dom';

export default withRouter(withUser(HearderView));
//  withRouter를 둘러준 컴포넌트는 match, history, location prop을 받게 된다.

// 의존성이 생기게 만는 놈이 기떄문에 실무에서 이렇게 만들 만듦.
// 이렇게 사용 하면 스트리북 작성시 좋습니다.
// 강제로 상태를 초기화 시키고 싶다면 키를 변경 해주면 된다.
