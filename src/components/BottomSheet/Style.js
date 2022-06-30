import styled from "styled-components";
import { color, maxWidth } from '../../styles/Variable';

const { midnight400, midnight500, blue100 } = color;

const speed = '0.3s';

const BottomSheets = styled.article`
    z-index: 10;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;

    &.open {
        opacity: 1;
        pointer-events: auto;

        > .content {
            transform: translate(-50%, 0);
        }
    }

    &.close {
        opacity: 0;
        pointer-events: none;
        transition: opacity ${speed};

        > .content {
            transform: translate(-50%, 100%);
        }
    }

    > .bg {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: ${midnight400};
        backdrop-filter: blur(2px);
    }

    > .content {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
        width: 100%;
        max-width: ${maxWidth};
        padding: 40px 32px;
        border-radius: 16px 16px 0px 0px;
        box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.24);
        text-align: center;
        background: white;
        transition: all ${speed};

        > .title {
            margin-bottom: 16px;
    
            h3 {
                font-size: 20px;
                font-weight: 700;
                letter-spacing: -0.03em;
            }
        }
    
        > .text {
            p {
                margin-bottom: 16px;
                color: ${midnight500};
                font-size: 16px;
    
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    
        > .button {
            margin-top: 32px;
    
            > button {
                width: 100%;
                padding: 15px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 700;
                background: ${blue100};
            }
        }
    }
`;

export default BottomSheets;