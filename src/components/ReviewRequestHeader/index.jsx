import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headers } from '../../styles/Common';
import Modal from '../Modal';

function ReviewRequestHeader() {
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

    return (
        <Headers>
            <button type="button" onClick={onOpenModal} className='left-button back-button'>
                <span className='left-button-text'>뒤로 가기</span>
            </button>
            {openModal && 
                <Modal title={'정말 나가시겠습니까?'} text={'작성하신 내용이 저장되지 않습니다.'}>
                    <button type='button' onClick={onClickBack}>네</button>
                    <button type='button' onClick={onCloseModal}>아니오</button>
                </Modal>
            }
        </Headers>        
    );
}

export default ReviewRequestHeader;