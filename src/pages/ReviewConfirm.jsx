import { PageTitles } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import ReviewConfirmHeader from '../components/ReviewConfirmHeader';
import ReviewConfirmForm from '../components/ReviewConfirmForm';

function ReviewConfirm() {
    return (
        <PageLayout>
            <ReviewConfirmHeader />
            <PageTitles>
                <h1>포트폴리오 리뷰 신청이 도착했어요!</h1>
                <p>포트폴리오 리뷰는 40분 동안 1:1 대화로 진행되며, 4만 원의 리워드가 지급됩니다.</p>
            </PageTitles>
            <ReviewConfirmForm />
        </PageLayout>
    );
}

export default ReviewConfirm;