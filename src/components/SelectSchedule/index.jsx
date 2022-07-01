import PropTypes from 'prop-types';
import SelectSchedules from './Style';
import IconCheck from '../IconCheck';

function SelectSchedule({ data }) {
    return (
        <SelectSchedules>
            <div className='schedule-label'>
                <p>{data.date}</p>
                <p className='schedule-label-time'>{data.time}</p>
            </div>
            <figure className='check-icon'>
                <IconCheck checked={true} />
            </figure>
        </SelectSchedules>
    );
}

SelectSchedule.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SelectSchedule;