import PropTypes from 'prop-types';
import Modals from './Style';

function Modal({ title, text, children }) {
    return (
        <Modals>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className='text'>
                <p>{text}</p>
            </div>
            <div className='button'>
                {children}
            </div>
        </Modals>        
    );
}

Modal.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
};


export default Modal;