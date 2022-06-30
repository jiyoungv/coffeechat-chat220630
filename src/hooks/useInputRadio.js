import { useState, useCallback } from 'react';

const useInputRadio = (initialState = '', selfUncheckable = false) => {
    const [state, setState] = useState(initialState);
    const handler = useCallback((clickId) => {
        if (selfUncheckable && state === clickId) {
            setState('');
        } else {
            setState(clickId);
        }
    }, [state, selfUncheckable]);

    return [state, handler, setState];
}

export default useInputRadio;