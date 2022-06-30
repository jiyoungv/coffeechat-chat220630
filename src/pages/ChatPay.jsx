import { PageInfos, Dividers } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import ChatPayHeader from '../components/ChatPayHeader';
import ChatPayForm from '../components/ChatPayForm';
import img_rocket from '../assets/images/img_rocket.svg';
import partnerData from '../tempData/partnerData';

function ChatPay() {
    return (
        <PageLayout>
            <ChatPayHeader title={'결제하기'} />
            <PageInfos>
                <div className='info-with-image'>
                    <figure>
                        <img src={img_rocket} alt='' />
                    </figure>
                    <h2>{partnerData.nickname}님과의 커피챗을 신청하셨습니다.</h2>
                </div>
                <div className='info-desc'>
                    <p><b>좋은 선택이십니다.</b></p>
                    <p>파트너님은 후기가 30개 이상인 베테랑 파트너님입니다.</p>
                </div>
            </PageInfos>
            <Dividers/>
            <ChatPayForm />
        </PageLayout>
    );
}

export default ChatPay;