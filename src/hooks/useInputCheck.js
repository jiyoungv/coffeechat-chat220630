import { useState, useCallback } from 'react';
import { setToArray } from '../utils/func';

const useInputCheck = (initialState = []) => {
    const [state, setState] = useState(initialState);
    const handler = useCallback((changeId) => {
        let newState = new Set(state);
    
        if (newState.has(changeId)) {
            newState.delete(changeId);
        } else {
            newState.add(changeId);
        }

        setState(setToArray(newState));
    }, [state]);

    return [state, handler, setState];
}

export default useInputCheck;