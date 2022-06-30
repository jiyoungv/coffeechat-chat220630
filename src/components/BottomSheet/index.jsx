import PropTypes from 'prop-types';
import BottomSheets from './Style';

function BottomSheet({ close, onClose, title, children }) {
    return (
        <BottomSheets className={close ? 'close' : 'open' }>
            <div className='bg' onClick={onClose}></div>
            <div className='content'>
                <div className='title'>
                    <h3>{title}</h3>
                </div>
                <div className='text'>
                    {children}
                </div>
                <div className='button'>
                    <button type='button' onClick={onClose}>확인</button>
                </div>
            </div>
        </BottomSheets>
    );
}

BottomSheet.propTypes = {
    close: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default BottomSheet;