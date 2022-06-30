import { useEffect, useState, useCallback } from 'react';
import { FieldTitles, Dividers, Cautions, FloatButtons, Buttons, InputTexts, InputTextAreas } from '../../styles/Common';
import ReviewRequestForms from './Style';
import ReviewRequestModal from '../ReviewRequestModal';
import ScheduleList from '../ScheduleList';
import scheduleData from '../../tempData/scheduleData';
import useInputText from '../../hooks/useInputText';
import useInputCheck from '../../hooks/useInputCheck';

function ReviewRequestForm() {
    // 일정 여러개 선택
    const [checkSchedules, handlerSchedule] = useInputCheck();

    // 포트폴리오 링크
    const [link, onChangeLink] = useInputText('');

    // 포트폴리오 링크 오류 여부
    // const [linkError, setLinkError] = useState(true);

    // 포트폴리오 링크 오류 모달
    const [linkErrorModal, setLinkErrorModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setLinkErrorModal(false);
    }, []);

    // 추가 궁금한 사항
    const [message, onChangeMessage] = useInputText('');

    // 신청하기 버튼 활성화 여부
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        if (checkSchedules.length < 1) return;
        if (link.length < 1) return;
        if (message.length < 50) return;
        
        setCanSubmit(true);

        return () => {
            setCanSubmit(false);
        }
    }, [checkSchedules, link, message]);

    // 신청하기
    const onSubmitRequest = useCallback((e) => {
        e.preventDefault();
        // if (linkError) return setLinkErrorModal(true); // 포트폴리오 링크 오류 시 모달 호출
        setLinkErrorModal(true); // QA를 위한 포트폴리오 링크 오류 모달 호출

        let scheduleId = '';
        for (let x of checkSchedules) {
            scheduleId += `${x},`;
        }

        console.log(`체크한 일정 id: ${scheduleId}\n포트폴리오 링크: ${link}\n추가 궁금한 사항: ${message}`);
    }, [checkSchedules, link, message]);

    return (
        <ReviewRequestForms onSubmit={onSubmitRequest}>
            <article className='form-schedule'>
                <FieldTitles>
                    <div className='title'>
                        <h6>일정 선택</h6>
                        <small>선호하는 일정 모두 선택 가능</small>
                    </div>
                </FieldTitles>
                <ScheduleList name={'schedule'} handler={handlerSchedule} data={scheduleData} checkIds={checkSchedules} />
            </article>
            <Dividers/>
            <article className='form-link'>
                <FieldTitles>
                    <div className='title'>
                        <h6>나의 포트폴리오</h6>
                        <small>필수</small>
                    </div>
                    <div className='text'>
                        <p>제출해주신 포트폴리오는 파트너에게만 전달되며 철저히 보호됩니다.</p>
                    </div>
                </FieldTitles>
                <div className='form-link-input'>
                    <InputTexts type='text' value={link} onChange={onChangeLink} placeholder={'포트폴리오 링크를 추가해 주세요.'} />
                </div>
                <Cautions>
                    <p>PDF 형태의 포트폴리오 제출을 추가로 원하는 경우, 커피챗 카카오톡 고객센터로 문의 주시길 바랍니다.</p>
                </Cautions>
            </article>
            <Dividers/>
            <article className='form-message'>
                <FieldTitles>
                    <div className='title'>
                        <h6>추가 궁금한 사항</h6>
                        <small>필수</small>
                    </div>
                    <div className='text'>
                        <p>공백포함 최소 50자 (최대 500자 작성 가능)</p>
                    </div>
                </FieldTitles>
                <div className='form-message-input'>
                    <InputTextAreas value={message} onChange={onChangeMessage} maxLength='500' placeholder={'가장 궁금한 내용을 포함하여 파트너에게 미리 전하고 싶은 메시지를 자유롭게 작성해 보세요. (최소 50자)'}></InputTextAreas>
                </div>
            </article>
            <FloatButtons>
                <Buttons type='submit' disabled={!canSubmit}>신청하기</Buttons>
            </FloatButtons>
            {linkErrorModal && <ReviewRequestModal title={'포트폴리오 링크 오류'} text={'유효하지 않은 링크입니다. 다시 한번 확인해 주세요.'} onClose={onCloseModal} />}
        </ReviewRequestForms>
    );
}

export default ReviewRequestForm;