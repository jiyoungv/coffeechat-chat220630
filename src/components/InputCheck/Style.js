import styled from 'styled-components';
import { color } from '../../styles/Variable';
import { hidden } from '../../styles/Mixin';

const { brand100, brand500, midnight200, midnight400 } = color

const InputChecks = styled.div`
    > input[type='checkbox'] {
        ${hidden}

        &:checked + label {
            border-color: ${brand500};
            background: ${brand100};            
        }

        &:disabled + label {
            opacity: 0.5;
            color: ${midnight400};
        }
    }

    > label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border: 1px solid ${midnight200};
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        word-break: break-all;
    }

    .check-icon {
        width: 18px;
        margin-left: 18px;
        text-align: center;
    }

    &.type2 {
        > label {
            font-size: 14px;
            font-weight: 400;
        }
    }
`;

export default InputChecks;