import { useEffect, useState, useCallback } from 'react';
import { FieldTitles, Dividers, Cautions, FloatButtons, Buttons, InputTexts, InputTextAreas } from '../../styles/Common';
import ChatRequestForms from './Style';
import ScheduleList from '../ScheduleList';
import CheckSchedule from '../CheckSchedule';
import scheduleData from '../../tempData/scheduleData';
import useInputText from '../../hooks/useInputText';
import useInputCheck from '../../hooks/useInputCheck';
import { priceToString } from '../../utils/func';

function ChatRequestForm() {
    // 금액
    const originalAmount = 14900;
    const finalAmount = 4900;

    // 일정 선택
    const checkSchedulesIds = [scheduleData[0].id, scheduleData[1].id, scheduleData[2].id];
    const [checkSchedules, handlerSchedule] = useInputCheck(checkSchedulesIds);
    const [schedule1, setSchedule1] = useState(null);
    const onClickSchedule1 = useCallback(() => {
        setSchedule1(scheduleData[0].schedule);
    }, []);
    const [schedule2, setSchedule2] = useState(null);
    const onClickSchedule2 = useCallback(() => {
        setSchedule2(scheduleData[1].schedule);
    }, []);
    const [schedule3, setSchedule3] = useState(null);
    const onClickSchedule3 = useCallback(() => {
        setSchedule3(scheduleData[2].schedule);
    }, []);

    // 간단히 선택
    // const [checkSimpleQuestions, handlerSimpleQuestion] = useInputCheck();

    // 직접 작성
    // const [detailQuestion, setDetailQuestion] = useState();

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
        if (schedule1 === null || schedule2 === null || schedule3 === null) return;
        
        setCanSubmit(true);

        return () => {
            setCanSubmit(false);
        }
    }, [schedule1, schedule2, schedule3]);

    // 다음
    const onSubmitRequest = useCallback((e) => {
        e.preventDefault();

        console.log(`첫번째 일정: ${schedule1}\n두번째 일정: ${schedule2}\n세번째 일정: ${schedule3}\n추가 궁금한 사항: ${message}`);
    }, [schedule1, schedule2, schedule3, message]);

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
                <FieldTitles>
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
                                : <CheckSchedule name={'schedule'} id={checkSchedulesIds[0]} checkIds={checkSchedules} handler={handlerSchedule} data={schedule1} disabled={true} />
                            }
                        </li>
                        <li>
                            {schedule2 === null
                                ? <button type='button' className='form-schedule-button' onClick={onClickSchedule2}>두번째 일정 선택하기</button>
                                : <CheckSchedule name={'schedule'} id={checkSchedulesIds[1]} checkIds={checkSchedules} handler={handlerSchedule} data={schedule2} disabled={true} />
                            }
                        </li>
                        <li>
                            {schedule3 === null
                                ? <button type='button' className='form-schedule-button' onClick={onClickSchedule3}>세번째 일정 선택하기</button>
                                : <CheckSchedule name={'schedule'} id={checkSchedulesIds[2]} checkIds={checkSchedules} handler={handlerSchedule} data={schedule3} disabled={true} />
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
                        <small className='type2'>최소 2개 (최대 5개) 선택</small>
                    </div>
                </FieldTitles>
                <div>
                    {/* <Tabs onChange={(key) => {console.log(key)})}>
                        <TabContent tab='tab1' key='1' content={<div>탭컨텐츠1</div>}>
                        <TabContent tab='tab2' key='2' content={<div>탭컨텐츠2</div>}>
                    <Tabs/> */}
                    <ul>
                        <li>
                            <input type='checkbox' name='tab' id='tab1' />
                            <label for='tab1'>간단히 선택할게요</label>
                        </li>
                        <li>
                            <input type='checkbox' name='tab' id='tab2' />
                            <label for='tab2'>직접 작성할래요</label>
                        </li>
                    </ul>
                    {/* {tab1 && 
                        <QuestionList />
                    }
                    {tab2 && 
                        <div>
                            textarea
                        </div>
                    } */}
                </div>
                {/* <ScheduleList name={'question'} handler={handlerSimpleQuestion} data={[]} checkIds={checkSimpleQuestions} /> */}
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
                </div>
                <div className='form-message-length'>
                    {messageLength}/{messageMaxLength}자
                </div>
            </article>
            <FloatButtons>
                <Buttons type='submit' disabled={!canSubmit}>다음 : 결제하기</Buttons>
            </FloatButtons>
        </ChatRequestForms>
    );
}

export default ChatRequestForm;