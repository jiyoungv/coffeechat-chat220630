import { PageTitles } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import ReviewRequestForm from '../components/ReviewRequestForm';
import ReviewRequestHeader from '../components/ReviewRequestHeader';
import partnerData from '../tempData/partnerData';

function ReviewRequest() {
    return (
        <PageLayout>
            <ReviewRequestHeader />
            <PageTitles>
                <h1>{partnerData.nickname} 파트너에게 포트폴리오 리뷰 커피챗 신청하기</h1>
            </PageTitles>
            <ReviewRequestForm />
        </PageLayout>
    );
}

export default ReviewRequest;