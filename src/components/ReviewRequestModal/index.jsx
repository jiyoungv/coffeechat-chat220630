import PropTypes from 'prop-types';
import Modal from '../Modal';

function ReviewRequestModal({ title, text, onClose }) {
    return (
        <Modal title={title} text={text}>
            <button type='button' onClick={onClose} className='button-full'>돌아가기</button>
        </Modal>
    );
}

ReviewRequestModal.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onClose: PropTypes.func,
};

export default ReviewRequestModal;