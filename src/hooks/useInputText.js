import { useState, useCallback } from 'react';

const useInputText = (initialState = '') => {
    const [state, setState] = useState(initialState);
    const handler = useCallback((e) => {
        setState(e.target.value);
    }, []);    

    return [state, handler, setState];
}

export default useInputText;