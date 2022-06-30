import styled from "styled-components";
import { color } from '../../styles/Variable';

const { midnight500, midnight600, bg } = color;

const ReviewPayForms = styled.form`
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

    .form-message {
        padding-bottom: 8px;
    }

    .form-message-view {
        padding: 16px 24px;
        border-radius: 8px;
        background: ${bg};
        word-break: break-all;

        p {
            color: ${midnight600};
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

export default ReviewPayForms;