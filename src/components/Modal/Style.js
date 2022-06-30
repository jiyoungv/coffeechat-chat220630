import styled from 'styled-components';
import { color } from '../../styles/Variable';

const { blue100, midnight500 } = color;

const Modals = styled.article`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 315px;
    padding: 24px;
    padding-top: 32px;
    border-radius: 16px;
    background: white;
    box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.24);
    
    > .title {
        margin-bottom: 8px;
        text-align: center;

        > h3 {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.03em;
            word-break: break-all;
        }
    }

    > .text {
        margin-bottom: 32px;
        text-align: center;

        > p {
            color: ${midnight500};
            font-size: 16px;
        }
    }

    > .button, > .button .button-strange1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        > a, > button {
            width: 47%;
            flex: 0 0 47%;
            padding: 15px;
            border-radius: 8px;
            background: ${blue100};
            font-size: 16px;
            font-weight: 700;

            &:last-child {
                background: linear-gradient(135deg, #7E6CF5 0%, #6CA3F5 100%);
                box-shadow: 0px 2px 16px rgba(108, 163, 245, 0.48);
                color: white;
            }

            &.button-full {
                width: 100%;
                flex-basis: 100%;
            }
        }

        > .button-strange1 {
            position: relative;
            width: 100%;
            padding-bottom: 56px;
        }

        > .button-strange2 {
            position: absolute;
            left: 0%;
            bottom: 13px;
            width: 100%;
            
            > a, > button {
                color: ${midnight500};
                font-weight: 700;
            }
        }
    }
`;

export default Modals;