import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import InputCheck from '../InputCheck';
import SimpleQuestionLists from './Style';

function SimpleQuestionList({ name, handler, data, checkIds = [], firstLength = 4, maxCheckLength, checkDisabled }) {
    // 항목 더보기
    const shouldSimpleQuestionHide = data.length > firstLength;
    const [simpleQuestionLength, setSimpleQuestionLength] = useState(shouldSimpleQuestionHide ? firstLength : data.length);
    const [canSimpleQuestionMore, setCanSimpleQuestionMore] = useState(shouldSimpleQuestionHide ? true : false );
    const onClickSimpleQuestionMore = useCallback(() => {
        setSimpleQuestionLength(data.length);
        setCanSimpleQuestionMore(false);
    }, [data.length]);

    return (
        <SimpleQuestionLists>
            <div className='form-question-input'>
                {data.map((v, i) => {
                    if (i > simpleQuestionLength - 1) return false;
                    return <InputCheck key={`simple-question${i}`} name={name} className={'type2'} id={`simple-question${i}`} checkIds={checkIds} handler={handler} label={v} maxCheckLength={maxCheckLength} checkDisabled={checkDisabled}/>
                })}
            </div>
            {canSimpleQuestionMore &&
                <div className='form-question-more'> 
                    <button type='button' onClick={onClickSimpleQuestionMore}>{data.length - firstLength}개의 항목 더 보기</button>
                </div>
            }
        </SimpleQuestionLists>
    );
}

SimpleQuestionList.propTypes = {
    name: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    checkIds: PropTypes.array.isRequired,
    firstLength: PropTypes.number,
    maxCheckLength: PropTypes.number,
    checkDisabled: PropTypes.func,
};

export default SimpleQuestionList;