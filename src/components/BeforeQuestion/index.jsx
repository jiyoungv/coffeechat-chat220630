import { useEffect } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import BeforeQuestions from './Style';
import icon_close from '../../assets/images/icon_close.svg';
import myData from '../../tempData/myData';

function BeforeQuestion({ close, onClose }) {
    useEffect(() => {
        if (!close) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [close]);

    return (
        <BeforeQuestions className={close ? 'close' : 'open' }>
            <div className='bg' onClick={onClose}></div>
            <div className='content'>
                <div className='content-top'>
                    <div className='content-header'>
                        <button type='button' className='content-header-button' onClick={onClose}><img src={icon_close} alt='닫기' /></button>
                        <p className='content-header-title'>나의 이전 질문 확인하기</p>
                    </div>
                    <div className='content-info'>
                        <p>텍스트를 복사해서 사용해 보세요 :)</p>
                    </div>
                </div>
                <ul className='question-list'>
                    {myData.beforeQuestions.map((v, i) => (
                        <li key={v.id}>
                            <h6 className='list-title'>{v.date} {v.partner}님과의 커피챗 </h6>
                            <div className='list-content'>
                                {parse(v.question)}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </BeforeQuestions>
    );
}

BeforeQuestion.propTypes = {
    close: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default BeforeQuestion;