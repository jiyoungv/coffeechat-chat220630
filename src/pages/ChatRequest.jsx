import { PageTitles } from '../styles/Common';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import ChatRequestForm from '../components/ChatRequestForm';

function ChatRequest() {
    return (
        <PageLayout>
            <PageHeader />
            <PageTitles>
                <h1>&#123;파트너닉네임&#125; 님께 &#123;N&#125;분 커피챗 제안하기</h1>
            </PageTitles>
            <ChatRequestForm />
        </PageLayout>
    );
}

export default ChatRequest;