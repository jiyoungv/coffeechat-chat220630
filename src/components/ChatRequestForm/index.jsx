import { useEffect, useState, useCallback, useMemo } from 'react';
import { FieldTitles, Dividers, FloatButtons, Buttons, InputTextAreas } from '../../styles/Common';
import ChatRequestForms from './Style';
import SimpleQuestionList from '../SimpleQuestionList';
import SelectSchedule from '../SelectSchedule';
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
        id: 'calendar2',
        schedule: { date: '6/2 (월)', time: '8:00 PM ~ 9:00 PM' }
    }), []);
    const calendar3 = useMemo(() => ({
        id: 'calendar3',
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
    const [questionTab, setQuestionTab] = useState(0);
    const onChangeQuestionTab = useCallback((index) => () => {
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

    // 직접 작성할래요
    const detailQuestionMinLength = 50;
    const detailQuestionMaxLength = 500;
    const [detailQuestion, setDetailQuestion] = useState('');
    const [detailQuestionLength, setDetailQuestionLength] = useState(detailQuestion.length);
    const onChangeDetailQuestion = useCallback((e) => {
        setDetailQuestion(e.target.value);
        setDetailQuestionLength(e.target.value.length);
    }, []);

    // 메시지
    const messageMaxLength = 500;
    const [message, setMessage] = useState('');
    const [messageLength, setMessageLength] = useState(message.length);
    const onChangeMessage = useCallback((e) => {
        setMessage(e.target.value);
        setMessageLength(e.target.value.length);
    }, []);

    // 다음 버튼 활성화 여부
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        if (schedule1 === null || schedule2 === null || schedule3 === null) return; // 일정 체크
        if (checkSimpleQuestions.length < simpleQuestionMinLength) return; // 간단히 선택할게요 체크
        if (detailQuestion.length < detailQuestionMinLength) return; // 직접 작성할래요 체크

        setCanSubmit(true);

        return () => {
            setCanSubmit(false);
        }
    }, [schedule1, schedule2, schedule3, checkSimpleQuestions, detailQuestion]);

    // 다음
    const onSubmitRequest = useCallback((e) => {
        e.preventDefault();

        console.log(`첫번째 일정: ${schedule1}\n두번째 일정: ${schedule2}\n세번째 일정: ${schedule3}`);
        console.log(`간단히 선택할게요 ID: ${checkSimpleQuestions}`);
        console.log(`추가 궁금한 사항: ${message}`);
    }, [schedule1, schedule2, schedule3, checkSimpleQuestions, message]);

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
                <FieldTitles>
                    <div className='title'>
                        <h6>무엇이 궁금한가요?</h6>
                        <small className='type2'>최소 {simpleQuestionMinLength}개 (최대 {simpleQuestionMaxLength}개) 선택</small>
                    </div>
                </FieldTitles>
                {/* <Tab name={'question-tab'} onChange={onChangeQuestionTab} labels={['간단히 선택할게요', '직접 작성할래요']} /> */}
                <ul>
                    {['간단히 선택할게요', '직접 작성할래요'].map((v, i) => (
                        <li key={i}>
                            <input type='radio' name={'radio'} id={`radio${i}`} onChange={onChangeQuestionTab(i)} checked={questionTab === i} />
                            <label htmlFor={`radio${i}`}>{v}</label>
                        </li>
                    ))}                  
                </ul>

                {questionTab === 0 && <SimpleQuestionList name={'simple-question'} handler={handlerSimpleQuestion} data={myData.simpleQuestions} checkIds={checkSimpleQuestions} maxCheckLength={simpleQuestionMaxLength} checkDisabled={checkDisabledSimpleQuestion} />}
                {questionTab === 1 && 
                    <div className='form-detail-question-input'>
                        <div className='form-detail-question-length'>
                            {detailQuestionLength}/{detailQuestionMaxLength}자 (공백포함 최소 {detailQuestionMinLength}자)
                        </div>                        
                        <InputTextAreas value={detailQuestion} onChange={onChangeDetailQuestion} maxLength={detailQuestionMaxLength} fontSize={16} minHeight={327} placeholder={'안녕하세요, 커리어 전환을 고민하고 있는 현재 MBA 재학생입니다.\n\nQ. 대기업에서 해외 MBA 후 컨설팅으로 가는 케이스가 많은가요?\nQ. 최근 컨설턴트들의 넥스트 커리어는 어떻게 되나요?\nQ. 스타트업로의 이동이 정말 많은 편인가요? 포지션은 전략일까요?'}></InputTextAreas>
                    </div>
                }
            </article>
            <Dividers gutter={32} />            
            <article className='form-message'>
                <FieldTitles mb={24}>
                    <div className='title'>
                        <h6>더 궁금한 점은 메시지를 남겨 주세요.</h6>
                    </div>
                </FieldTitles>
                <div className='form-message-input'>
                    <InputTextAreas value={message} onChange={onChangeMessage} maxLength={messageMaxLength} fontSize={16} placeholder={'가장 궁금한 내용을 포함하여 파트너에게 미리 전하고 싶은 메시지를 자유롭게 작성해 보세요.'}></InputTextAreas>
                    <div className='form-message-length'>
                        {messageLength}/{messageMaxLength}자
                    </div>
                </div>
            </article>
            <FloatButtons>
                <Buttons type='submit' disabled={!canSubmit}>다음 : 결제하기</Buttons>
            </FloatButtons>
        </ChatRequestForms>
    );
}

export default ChatRequestForm;