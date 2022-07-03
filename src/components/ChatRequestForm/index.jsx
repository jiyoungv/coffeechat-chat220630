import { useEffect, useState, useCallback, useMemo } from 'react';
import parse from 'html-react-parser';
import { FieldTitles, Dividers, Buttons, InputTextAreas } from '../../styles/Common';
import ChatRequestForms from './Style';
import SimpleQuestionList from '../SimpleQuestionList';
import SelectSchedule from '../SelectSchedule';
import Tab from '../Tab';
import BeforeQuestion from '../BeforeQuestion';
import myData from '../../tempData/myData';
import useInputCheck from '../../hooks/useInputCheck';
import { priceToString } from '../../utils/func';

function ChatRequestForm() {
    // 금액
    const originalAmount = 14900;
    const finalAmount = 4900;

    // 캘린더 임시 데이터
    const calendar1 = useMemo(() => ({
        id: 'calendar1',
        schedule: { date: '6/1 (월)', time: '8:00 PM ~ 9:00 PM' }
    }), []);
    const calendar2 = useMemo(() => ({
        id: 'calendar5',
        schedule: { date: '6/2 (월)', time: '8:00 PM ~ 9:00 PM' }
    }), []);
    const calendar3 = useMemo(() => ({
        id: 'calendar11',
        schedule: { date: '6/3 (월)', time: '8:00 PM ~ 9:00 PM' }
    }), []);        

    // 첫번째 일정
    const [schedule1, setSchedule1] = useState(null);
    const onClickSchedule1 = useCallback(() => {
        setSchedule1(calendar1);
    }, [calendar1]);

    // 두번째 일정
    const [schedule2, setSchedule2] = useState(null);
    const onClickSchedule2 = useCallback(() => {
        setSchedule2(calendar2);
    }, [calendar2]);

    // 세번째 일정
    const [schedule3, setSchedule3] = useState(null);
    const onClickSchedule3 = useCallback(() => {
        setSchedule3(calendar3);
    }, [calendar3]);

    // 무엇이 궁금한가요 탭
    const questionDefaultIndex = 0;
    const [questionTab, setQuestionTab] = useState(questionDefaultIndex);
    const onChangeQuestionTab = useCallback((index) => {
        setQuestionTab(index);
    }, []);

    // 간단히 선택할게요
    const simpleQuestionMinLength = 2;
    const simpleQuestionMaxLength = 5;
    const [checkSimpleQuestions, handlerSimpleQuestion] = useInputCheck();
    const checkDisabledSimpleQuestion = useCallback((disabled) => {
        if (disabled) {
            alert(`${simpleQuestionMaxLength}개 모두 선택했습니다 (토스트 노출 필요)`);
        }
    }, []);

    // 메시지
    const messageMaxLength = 500;
    const [message, setMessage] = useState('');
    const [messageLength, setMessageLength] = useState(message.length);
    const onChangeMessage = useCallback((e) => {
        setMessage(e.target.value);
        setMessageLength(e.target.value.length);
    }, []);

    // 직접 작성할래요
    const detailQuestionMinLength = 50;
    const detailQuestionMaxLength = 500;
    const [detailQuestion, setDetailQuestion] = useState('');
    const [detailQuestionLength, setDetailQuestionLength] = useState(detailQuestion.length);
    const onChangeDetailQuestion = useCallback((e) => {
        setDetailQuestion(e.target.value);
        setDetailQuestionLength(e.target.value.length);
    }, []);

    // 이전 질문 확인하기 바텀시트
    const [beforeQuestionOpen, setBeforeQuestionOpen] = useState(false);
    const onOpenBeforeQuestion = useCallback(() => {
        setBeforeQuestionOpen(true);
    }, []);
    const onCloseBeforeQuestion = useCallback(() => {
        setBeforeQuestionOpen(false);
    }, []);    

    // 다음 버튼 활성화 여부
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        if (schedule1 === null || schedule2 === null || schedule3 === null) return; // 일정 체크
        if (checkSimpleQuestions.length < simpleQuestionMinLength && detailQuestion.length < detailQuestionMinLength) return; // 무엇이 궁금한가요 체크

        setCanSubmit(true);

        return () => {
            setCanSubmit(false);
        }
    }, [schedule1, schedule2, schedule3, checkSimpleQuestions, detailQuestion]);

    // 다음
    const onSubmitRequest = useCallback((e) => {
        e.preventDefault();

        console.log(`첫번째 일정 ID: ${schedule1.id}\n두번째 일정 ID: ${schedule2.id}\n세번째 일정 ID: ${schedule3.id}`);
        console.log(`간단히 선택할게요 ID: ${checkSimpleQuestions}`);
        console.log(`직접 작성할래요: ${detailQuestion}`);
        console.log(`추가 궁금한 사항: ${message}`);
    }, [schedule1, schedule2, schedule3, checkSimpleQuestions, detailQuestion, message]);

    return (
        <ChatRequestForms onSubmit={onSubmitRequest}>
            <article className='form-amount'>
                <div className='form-amount-box'>
                    <h6>나의 결제 예정 금액</h6>
                    <div className='form-amount-number'>
                        <p className='number-original'>{priceToString(originalAmount)}원</p>
                        <p className='number-final'>{priceToString(finalAmount)}원</p>
                    </div>
                </div>
                <div className='form-amount-ps'>
                    <small>쿠폰 적용 최대 할인 금액으로 결제 됩니다.</small>
                </div>
            </article>
            <Dividers/>
            <article className='form-schedule'>
                <FieldTitles mb={24}>
                    <div className='title'>
                        <h6>일정은 언제로 할까요?</h6>
                        <small className='type2'>현지 시각 기준 선택</small>
                    </div>
                </FieldTitles>
                <div className='form-schedule-input'>
                    <ul>
                        <li>
                            {schedule1 === null
                                ? <button type='button' className='form-schedule-button' onClick={onClickSchedule1}>첫번째 일정 선택하기</button>
                                : <SelectSchedule data={schedule1.schedule} />
                            }
                        </li>
                        <li>
                            {schedule2 === null
                                ? <button type='button' className='form-schedule-button' onClick={onClickSchedule2}>두번째 일정 선택하기</button>
                                : <SelectSchedule data={schedule2.schedule} />
                            }
                        </li>
                        <li>
                            {schedule3 === null
                                ? <button type='button' className='form-schedule-button' onClick={onClickSchedule3}>세번째 일정 선택하기</button>
                                : <SelectSchedule data={schedule3.schedule} />
                            }
                        </li>
                    </ul>
                </div>
            </article>
            <Dividers gutter={40} />
            <article className='form-question'>
                <FieldTitles mb={24}>
                    <div className='title'>
                        <h6>무엇이 궁금한가요?</h6>
                        {questionTab === 0 && <small className='type2'>최소 {simpleQuestionMinLength}개 (최대 {simpleQuestionMaxLength}개) 선택</small>}
                        {questionTab === 1 && <button type='button' className='type2' onClick={onOpenBeforeQuestion}>나의 이전 질문 확인하기</button>}
                        {beforeQuestionOpen && <BeforeQuestion close={!beforeQuestionOpen} onClose={onCloseBeforeQuestion} />}
                    </div>
                </FieldTitles>
                <Tab handler={onChangeQuestionTab} labels={['간단히 선택할게요', '직접 작성할래요']} defaultIndex={questionDefaultIndex} />
                <div className='form-question-input'>
                    {questionTab === 0 && <SimpleQuestionList name={'simple-question'} handler={handlerSimpleQuestion} data={myData.simpleQuestions} checkIds={checkSimpleQuestions} maxCheckLength={simpleQuestionMaxLength} checkDisabled={checkDisabledSimpleQuestion} />}
                    {questionTab === 1 && 
                        <div className='form-detail-question-input'>
                            <div className='form-detail-question-length'>
                                {detailQuestionLength}/{detailQuestionMaxLength}자 (공백포함 최소 {detailQuestionMinLength}자)
                            </div>                        
                            <InputTextAreas value={detailQuestion} onChange={onChangeDetailQuestion} maxLength={detailQuestionMaxLength} fontSize={16} minHeight={327} placeholder={parse('안녕하세요, 커리어 전환을 고민하고 있는 현재 MBA 재학생입니다.&#10;&#10;Q. 대기업에서 해외 MBA 후 컨설팅으로 가는 케이스가 많은가요?&#10;Q. 최근 컨설턴트들의 넥스트 커리어는 어떻게 되나요?&#10;Q. 스타트업로의 이동이 정말 많은 편인가요? 포지션은 전략일까요?')}></InputTextAreas>
                        </div>
                    }
                </div>
            </article>
            {questionTab === 0 &&
                <>
                    <Dividers gutter={32} />            
                    <article className='form-message'>
                        <FieldTitles mb={24}>
                            <div className='title'>
                                <h6>더 궁금한 점은 메시지를 남겨 주세요.</h6>
                            </div>
                        </FieldTitles>
                        <div className='form-message-input'>
                            <div className='form-message-length'>
                                {messageLength}/{messageMaxLength}자
                            </div>                            
                            <InputTextAreas value={message} onChange={onChangeMessage} maxLength={messageMaxLength} fontSize={16} placeholder={'가장 궁금한 내용을 포함하여 파트너에게 미리 전하고 싶은 메시지를 자유롭게 작성해 보세요.'}></InputTextAreas>
                        </div>
                    </article>
                </>
            }
            <div className='form-submit'>
                <Buttons type='submit' disabled={!canSubmit}>다음 : 결제하기</Buttons>
            </div>
        </ChatRequestForms>
    );
}

export default ChatRequestForm;