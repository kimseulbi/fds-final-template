import { withUser } from '../contexts/UserContext';
import HearderView from '../components/HearderView';

export default withUser(HearderView);
// 의존성이 생기게 만는 놈이 기떄문에 실무에서 이렇게 만들 만듦.
// 이렇게 사용 하면 스트리북 작성시 좋습니다.
