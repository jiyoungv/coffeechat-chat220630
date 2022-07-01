import styled from 'styled-components';
import { color } from '../../styles/Variable';

const { brand500 } = color;

const SelectSchedules = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 1px solid ${brand500};
    border-radius: 8px;

    .schedule-label-time {
        margin-top: 4px;
        font-weight: 700;
    }

    .check-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 18px;
        height: 18px;
        margin-left: 16px;
    }
`;

export default SelectSchedules;