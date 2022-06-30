import { useCallback, useState, useEffect } from 'react';
import { FieldTitles, Buttons } from '../../styles/Common';
import ReviewConfirmForms from './Style';
import ScheduleList from '../ScheduleList';
import partnerData from '../../tempData/partnerData';
import scheduleData from '../../tempData/scheduleData';
import useInputRadio from '../../hooks/useInputRadio';

function ReviewConfirmForm() {
    // 일정 1개 선택
    const [checkSchedule, handlerSchedule] = useInputRadio('', true);

    // 신청하기 버튼 활성화 여부
    const [canSubmit, setCanSubmit] = useState(false);
    useEffect(() => {
        if (checkSchedule.length < 1) return;
        setCanSubmit(true);
        
        return () => {
            setCanSubmit(false);
        }
    }, [checkSchedule]);    

    // 신청하기
    const onSubmitConfirm = useCallback((e) => {
        e.preventDefault();
        console.log(`선택한 일정: ${checkSchedule}`);
    }, [checkSchedule]);

    return (
        <ReviewConfirmForms onSubmit={onSubmitConfirm}>
            <article className='form-client'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>신청자</h6>
                    </div>
                </FieldTitles>
                <div className='form-client-view'>
                    <p><b>{partnerData.nickname}</b></p>
                    <p className='form-client-view-name'>{partnerData.job} | {partnerData.level} </p>
                </div>
            </article>
            <article className='form-link'>
                <FieldTitles>
                    <div className='title'>
                        <h6>포트폴리오</h6>
                    </div>
                    <div className='text'>
                        <p>신청자의 포트폴리오는 파트너만 확인할 수 있습니다. 외부 공유는 금지되어 있습니다.</p>
                    </div>                    
                </FieldTitles>
                <div className='form-link-button'>
                    <a href={partnerData.link} target='_blank' rel="noreferrer">&#123;닉네임&#125; 님의 포트폴리오 확인하기</a>
                </div>
            </article>
            <article className='form-message'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>추가 궁금한 사항</h6>
                    </div>
                </FieldTitles>
                <div className='form-message-view'>
                    <p>{partnerData.message}</p>
                </div>
            </article>
            <article className='form-schedule'>
                <FieldTitles>
                    <div className='title'>
                        <h6>일정 선택</h6>
                        <small>선호하는 일정 1개 선택</small>
                    </div>
                </FieldTitles>
                <ScheduleList name={'schedule'} handler={handlerSchedule} data={scheduleData} multiple={false} checkId={checkSchedule} />
            </article>
            <div className='form-submit'>
                <Buttons type='submit' disabled={!canSubmit}>일정 확정하기</Buttons>
                <div className='form-submit-help'>
                    <a href='https://pf.kakao.com/_xjxcxbxfK/chat' target='_blank' rel='noreferrer'>도움이 필요해요 (고객센터 바로가기)</a>
                </div>
            </div>
        </ReviewConfirmForms>
    );
}

export default ReviewConfirmForm;