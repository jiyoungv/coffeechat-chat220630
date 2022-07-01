import styled from 'styled-components';
import { color } from '../../styles/Variable';
import amount_arrow from '../../assets/images/amount_arrow.svg';
import schedule_arrow from '../../assets/images/schedule_arrow.svg';

const { brand500, midnight400, midnight500, midnight600, midnight700 } = color;

const ChatRequestForms = styled.form`
    .form-amount {
        padding-top: 16px;
    }

    .form-amount-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border: 1px solid ${brand500};
        border-radius: 8px;
        box-shadow: 0px 2px 16px rgba(108, 163, 245, 0.48);

        > h6 {
            font-size: 16px;
            font-weight: 700;
        }
    }

    .form-amount-number {
        display: inline-flex;
        align-items: center;
        margin-left: 5px;
        font-weight: 700;

        > .number-original {
            position: relative;
            margin-right: 8px;
            padding-right: 9px;
            color: ${midnight500};
            font-size: 13px;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url(${amount_arrow}) center right/auto no-repeat;
            }
        }

        > .number-final {
            color: ${brand500};
            font-size: 16px;
        }
    }

    .form-amount-ps {
        margin-top: 8px;
        text-align: right;

        > small {
            color: ${midnight400};
            font-size: 11px;
        }
    }

    .form-schedule {
        padding-top: 16px;
    }

    .form-schedule-input {
        > ul {
            > li {
                margin-bottom: 16px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    .form-schedule-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 16px;
        border: 1px solid ${midnight700};
        border-radius: 8px;

        &::after {
            content: '';
            display: block;
            width: 18px;
            height: 18px;
            background: url(${schedule_arrow}) center/auto no-repeat;
        }
    }

    .form-detail-question-length {
        margin-bottom: 8px;
        color: ${midnight600};
        font-size: 13px;
        text-align: right;
    }

    .form-message {
        padding-bottom: 24px;
    }

    .form-message-input {
        margin-top: 15px;
    }

    .form-message-length {
        margin-top: 8px;
        color: ${midnight600};
        font-size: 13px;
        text-align: right;
    }
`;

export default ChatRequestForms;