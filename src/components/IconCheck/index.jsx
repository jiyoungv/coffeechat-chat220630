import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { color } from '../../styles/Variable';

function IconCheck({ checked }) {
    const { midnight200, brand500 } = color;
    const uncheckedColor = midnight200;
    const checkedColor = brand500;

    const [strokeColor, setStrokeColor] = useState(uncheckedColor);
    
    useEffect(() => {
        if (checked) {
            setStrokeColor(checkedColor);
        }

        return () => {
            setStrokeColor(uncheckedColor);
        }
    }, [checked, setStrokeColor, checkedColor, uncheckedColor]);

    return (
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5613 1.48914L5.53952 10.5109L1.43872 6.4101" stroke={strokeColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

IconCheck.propTypes = {
    checked: PropTypes.bool,
};

export default IconCheck;