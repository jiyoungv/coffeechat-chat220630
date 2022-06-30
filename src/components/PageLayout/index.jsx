import PropTypes from 'prop-types';
import GlobalStyle from '../../styles/GlobalStyle';
import { Layouts, Inners } from '../../styles/Common';

function PageLayout({ children }) {
    return (
        <>
            <GlobalStyle />
            <Layouts>
                <Inners>
                    {children}
                </Inners>
            </Layouts>
        </>
    )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout;