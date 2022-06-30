import { PageInfos, Dividers } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import ReviewPayForm from '../components/ReviewPayForm';
import img_rocket from '../assets/images/img_rocket.svg';
import partnerData from '../tempData/partnerData';

function ReviewPay() {
    return (
        <PageLayout>
            <PageHeader title={'결제하기'} />
            <PageInfos>
                <div className='info-with-image'>
                    <figure>
                        <img src={img_rocket} alt='' />
                    </figure>
                    <h2>{partnerData.nickname} 파트너에게 신청한 포트폴리오 리뷰 커피챗 입니다.</h2>
                </div>
                <div className='info-desc'>
                    <p>제안한 일정 중 파트너가 선택하면 확정 스케줄을 개별적으로 안내 드립니다.</p>
                </div>
            </PageInfos>
            <Dividers/>
            <ReviewPayForm />
        </PageLayout>
    );
}

export default ReviewPay;