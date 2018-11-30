import React from 'react';
import { withUser, UserConsumer } from '../contexts/UserContext';
import HearderView from '../components/HearderView';
// 헤더 뷰를 그려주면서 상태값을 
export default function Header(props){
    return <UserConsumer>
        {value => <HearderView key={value.username} {...value}/>}
    </UserConsumer>
}
// 의존성이 생기게 만는 놈이 기떄문에 실무에서 이렇게 만들 만듦.
// 이렇게 사용 하면 스트리북 작성시 좋습니다.
// 강제로 상태를 초기화 시키고 싶다면 키를 변경 해주면 된다.
