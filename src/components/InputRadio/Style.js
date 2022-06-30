import styled from 'styled-components';
import { color } from '../../styles/Variable';
import { hidden } from '../../styles/Mixin';

const { brand100, brand500,midnight200  } = color

const InputRadios = styled.div`
    > input[type='radio'] {
        ${hidden}

        &:checked + label {
            border-color: ${brand500};
            background: ${brand100};            
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
    }

    .check-icon {
        width: 24px;
        text-align: center;
    }
`;

export default InputRadios;