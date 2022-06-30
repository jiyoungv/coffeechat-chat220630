import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate  } from 'react-router-dom';
import { Headers } from '../../styles/Common';
import Modal from '../Modal';
function ChatPayHeader({ title }) {
    // 모달
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = useCallback(() => {
        setOpenModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    // 뒤로가기
    const navigate = useNavigate();
    const onClickBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const pageTitle = title 
        ? (
            <div className='header-title'>
                <p>{title}</p>
            </div>
        )
        : '';        

    return (
        <Headers>
            {pageTitle}
            <button type="button" onClick={onOpenModal} className='left-button back-button'>
                <span className='left-button-text'>뒤로 가기</span>
            </button>
            {openModal && 
                <Modal title={'정말 나가시겠습니까?'} text={'제안 일정과 사전 질문은 저장되며, 결제 이어하기로 신청을 완료할 수 있습니다.'}>
                    <button type='button' onClick={onClickBack}>네</button>
                    <button type='button' onClick={onCloseModal}>아니오</button>
                </Modal>            
            }
        </Headers>        
    );
}

ChatPayHeader.propTypes = {
    title: PropTypes.string,
};

export default ChatPayHeader;