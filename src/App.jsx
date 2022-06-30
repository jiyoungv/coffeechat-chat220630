import GlobalStyle from './styles/GlobalStyle';
import { Layouts } from './styles/Common';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <GlobalStyle />
            <Layouts>
                <div style={{ margin: '20px' }}>
                    <h1 style={{ fontSize: '20px', marginBottom: '10px' }}>포트폴리오 리뷰</h1>
                    <ul style={{ fontSize: '16px' }}>
                        <li style={{ marginBottom: '5px' }}><Link to="/review/request">1. 신청하기</Link></li>
                        <li style={{ marginBottom: '5px' }}><Link to="/review/pay">2. 결제하기</Link></li>
                        <li style={{ marginBottom: '5px' }}><Link to="/review/confirm">3. 수락하기</Link></li>
                    </ul>
                </div>
                <div style={{ margin: '20px' }}>
                    <h1 style={{ fontSize: '20px', marginBottom: '10px' }}>커피챗</h1>
                    <ul style={{ fontSize: '16px' }}>
                        <li style={{ marginBottom: '5px' }}><Link to="/chat/pay">1. 결제하기</Link></li>
                    </ul>
                </div>
            </Layouts>
        </>
    );
}

export default App;