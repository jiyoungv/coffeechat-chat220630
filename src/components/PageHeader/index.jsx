import { useCallback } from "react"
import { useNavigate  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Headers } from '../../styles/Common';

function PageHeader({ title }) {
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
            <button type="button" onClick={onClickBack} className='left-button back-button'>
                <span className='left-button-text'>뒤로 가기</span>
            </button>
        </Headers>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string,
};

export default PageHeader;