import PropTypes from 'prop-types';
import { LabelSchedules } from '../../styles/Common';
import InputCheck from '../InputCheck';

function CheckSchedule({ name, id, checkIds, handler, data }) {
    return (
        <div>
            <InputCheck name={name} id={id} checkIds={checkIds} handler={handler}>
                <LabelSchedules>
                    <p className='label-schedule-date'>{data.date}</p>
                    <p>{data.time}</p>
                </LabelSchedules>
            </InputCheck>
        </div>
    );
}

CheckSchedule.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checkIds: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

export default CheckSchedule;