import styled from "styled-components";
import { color, maxWidth } from '../../styles/Variable';
import icon_information from '../../assets/images/icon_information.svg';

const { midnight400, midnight500, slate100, slate200 } = color;

const speed = '0.3s';
const contentTopHeight = '114px';

const BeforeQuestions = styled.article`
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
        height: 90%;
        max-width: ${maxWidth};
        padding: 24px 24px 0;
        border-radius: 16px 16px 0px 0px;
        box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.24);
        background: white;
        transition: all ${speed};
    }

    .content-top {
        height: ${contentTopHeight};
    }

    .content-header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
    }
    
    .content-header-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0; 
        left: -12px;
        width: 48px;
        height: 48px;
    }

    .content-header-title {
        font-size: 16px;
    }

    .content-info {
        position: relative;
        padding: 16px;
        padding-left: calc(16px + 18px + 8px);
        border: 1px solid ${slate200};
        border-radius: 8px;

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 16px;
            left: 16px;
            width: 18px;
            height: calc(18px + 2px * 2);
            background: url(${icon_information}) center/auto no-repeat;
        }

        p {
            color: ${midnight500};
        }
    }

    .question-list {
        padding-top: 16px;
        max-height: calc(100% - ${contentTopHeight});
        overflow-y: auto;
        transition: all ${speed};
    
        &::-webkit-scrollbar {
            display: none;
        }

        > li {
            margin-bottom: 24px;

            > .list-title {
                margin-bottom: 8px;
                font-weight: 700;
            }

            > .list-content {
                padding: 16px;
                border-radius: 8px;
                background: ${slate100};
                color: ${midnight500};
            }
        }
    }
`;

export default BeforeQuestions;