import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { color, fontFamily } from './Variable';

const { midnight700 } = color;
const { system, appleSystem, notoSans } = fontFamily;

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body, input, textarea {
		font-size: 14px;
		font-family: ${appleSystem}, ${notoSans}, ${system};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;		
		font-weight: 400;
		line-height: 1.6;
		letter-spacing: -0.02em;
		color: ${midnight700};
		word-break: keep-all;
	}

	article, section, div, figure {
		position: relative;
	}
	
	figure {
		margin: 0;
        padding: 0;
        border: 0;
        line-height: 1;

        img {
            display: block;
        }
	}

	button {
		background: transparent;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		font-style: inherit;
		letter-spacing: inherit;
		line-height: inherit;
		text-align: inherit;
		color: inherit;
		cursor: pointer;

		&:focus {
			outline: none;
		}
	}

	a {
		text-decoration: none;
		&, &:active, &:visited {
			color: #000;
		}
	}

	strong, b {
		font-weight: 700;

		&.bolder {
			font-weight: 900;
		}
	}

	img {
		max-width: 100%;
	}
`;

export default GlobalStyle;