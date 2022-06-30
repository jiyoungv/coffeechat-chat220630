import styled from "styled-components";
import { color } from '../../styles/Variable';

const { midnight500, midnight600, brand500, blue100, bg } = color;

const ChatPayForms = styled.form`
    .form-partner {
        padding: 8px 0 32px;
    }

    .form-partner-view {
        > p {
            color: ${midnight600};
            word-break: break-all;
        }
    }

    .form-schedule {
        padding-bottom: 32px;            
    }

    .form-schedule-view {
        padding: 16px 24px;
        border-radius: 8px;
        background: ${bg};

        ul {
            li {
                margin-bottom: 8px;
                color: ${midnight600};

                &:last-child {
                    margin-bottom :0;
                }
            }
        }
    }

    .form-question {
        padding-bottom: 8px;

        .field-title {
            .title {
                > button {
                    color: ${brand500};
                }
            }
        }
    }

    .form-question-input {
        > textarea {
            min-height: 98px;
            padding-left: 24px;
            padding-right: 24px;
            background: ${bg};

            &, &::placeholder {
                color: ${midnight600};
            }
        }

        > .button {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            > button {
                display: block;
                margin-left: 16px;
                padding: 5.5px 16px;
                border-radius: 8px;
                background: ${blue100};
                font-size: 13px;
                font-weight: 700;

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    color: ${brand500};
                }
            }
        }
    }

    .form-coupon {
        padding: 8px 0;
    }

    .form-coupon-input {
        > div {
            padding-bottom: 8px;

            &:last-child {
                padding-bottom: 0;
            }
        }
    }

    .form-method-input {
        > div {
            padding-bottom: 8px;
        }
    }

    .form-caution {
        padding: 8px 0 32px;
    }

    .form-caution-list {
        li {
            position: relative;
            margin-bottom: 8px;
            padding-left: 13px;
            font-size: 12px;
            color: ${midnight500};

            &::before {
                content: '•';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .form-policy {
        padding-bottom: 8px;
    }

    .form-agree {
        padding: 8px 0 24px;

        p {
            color: ${midnight500};
            font-size: 12px;
        }
    }

    .form-submit {
        padding: 8px 0 42px;
    }
`;

export default ChatPayForms;