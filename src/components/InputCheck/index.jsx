import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IconCheck from '../IconCheck';
import InputChecks from './Style';

function InputCheck({ name, id, checkIds, handler, label, children }) {
    const [checkState, setCheckState] = useState(false);
    const onChangeCheck = useCallback((e) => {
        handler(e.target.id);
    }, [handler]);

    useEffect(() => {
        if (checkIds.length > 0) {
            for (let checkId of checkIds) {
                if (id === checkId) {
                    setCheckState(true);
                }
            }
        }

        return () => {
            setCheckState(false);
        }
    }, [id, checkIds]);

    return (
        <InputChecks>
            <input type='checkbox' name={name} id={id} checked={checkState} onChange={onChangeCheck} />
            <label htmlFor={id}>
                {label && <p>{label}</p>}
                {children}
                <figure className='check-icon'>
                    <IconCheck checked={checkState} />
                </figure>
            </label>            
        </InputChecks>
    );
}

InputCheck.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checkIds: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired,
    label: PropTypes.string,
    children: PropTypes.node,
};

export default InputCheck;