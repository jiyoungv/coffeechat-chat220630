import { useState, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Headers } from '../../styles/Common';
import Modal from '../Modal';

function ReviewConfirmHeader() {
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
            <button type="button" onClick={onOpenModal} className='left-button close-button'>
                <span className='left-button-text'>닫기</span>
            </button>
            {openModal && 
                <Modal title={'수락하지 않고 종료하시겠습니까?'} text={'모든 일정이 어렵거나, 도움이 필요하신 경우 고객센터로 말씀 부탁드립니다.'}>
                    <div className='button-strange1'>
                        <button type='button' onClick={onClickBack}>나가기</button>
                        <button type='button' onClick={onCloseModal}>돌아가기</button>
                    </div>
                    <div className='button-strange2'>
                        <a href='https://pf.kakao.com/_xjxcxbxfK/chat' target='_blank' rel='noreferrer'>고객센터</a>
                    </div>
                </Modal>            
            }
        </Headers>        
    );
}

export default ReviewConfirmHeader;