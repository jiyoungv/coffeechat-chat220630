import { css } from 'styled-components';

export const clearFix = css`
    &::after {
        content: '';
        display: block;
        clear: both;
    }
`;

export const hidden = css`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 1px;
    height: 1px;
`;