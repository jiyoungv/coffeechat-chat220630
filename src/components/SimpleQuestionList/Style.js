import styled from "styled-components";
import { color } from '../../styles/Variable';
import icon_arrow_down from '../../assets/images/icon_arrow_down.svg';

const { brand500} = color;

const SimpleQuestionLists = styled.article`
    .form-question-input {
        > div {
            padding-bottom: 16px;

            &:last-child {
                padding-bottom: 0;                
            }
        }
    }

    .form-question-more {
        padding-top: 20px;
        text-align: center;

        button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: ${brand500};
            font-weight: 700;

            &::after {
                content: '';
                display: block;
                width: 18px;
                height: 18px;
                background: url(${icon_arrow_down}) center/auto no-repeat;
            }
        }
    }    
`;

export default SimpleQuestionLists;