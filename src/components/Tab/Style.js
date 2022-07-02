import styled from 'styled-components';
import { color } from '../../styles/Variable';

const { bg, midnight700 } = color;
const padding = 4;

const Tabs = styled.ul`
    display: flex;
    align-items: center;
    position: relative;
    padding: ${padding}px;
    border-radius: 8px;
    background: ${bg};

    &::before {
        content: '';
        z-index: 1;
        position: absolute;
        top: ${padding}px;
        left: ${props => props.tabIndex === 0 
            ? '4px' 
            : (100 / props.tabLength * props.tabIndex).toFixed(4) + '%'
        };
        display: block;
        width: calc(${props => (100 / props.tabLength).toFixed(4)}% - ${padding}px);
        height: calc(100% - ${padding * 2}px);
        border-radius: 8px;        
        background: ${midnight700};
        transition: left 0.3s;
    }

    > li {
        z-index: 2;
        position: relative;
        width: ${props => (100 / props.tabLength).toFixed(4)}%;
        text-align: center;

        > button {
            width: 100%;
            padding: 9px 0;
            transition: all 0.3s;
        }

        &.active {
            > button {
                color: white;
                font-weight: 700;
            }
        }
    }
`;

export default Tabs;