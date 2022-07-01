import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IconCheck from '../IconCheck';
import InputChecks from './Style';

function InputCheck({ name, className, id, checkIds, handler, label, children, maxCheckLength, checkDisabled }) {
    const [checkState, setCheckState] = useState(false);
    const onChangeCheck = useCallback((e) => {
        handler(e.target.id);
    }, [handler]);

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (checkIds.length > 0) {
            for (let checkId of checkIds) {
                if (id === checkId) {
                    setCheckState(true);
                }
            }
        }

        if (maxCheckLength && checkIds.length === maxCheckLength && checkIds.indexOf(id) < 0) {
            setDisabled(true);
        }

        return () => {
            setCheckState(false);
            setDisabled(false);
        }
    }, [id, checkIds, maxCheckLength]);

    const onClickCheck = useCallback(() => {
        checkDisabled(disabled);
    }, [checkDisabled, disabled]);

    return (
        <InputChecks className={className} onClick={onClickCheck}>
            <input type='checkbox' name={name} id={id} checked={checkState} onChange={onChangeCheck} disabled={disabled} />
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
    className: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node,
    maxCheckLength: PropTypes.number,
    checkDisabled: PropTypes.func,
};

export default InputCheck;