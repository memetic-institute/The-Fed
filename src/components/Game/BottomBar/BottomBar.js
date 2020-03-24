import React from 'react';
import { string } from 'prop-types';
import { Navbar } from 'react-bootstrap';
import Footer from '../../Footer';

const BottomBar = ({ bg, ...props }) => (
    <Navbar bg={bg} fixed="bottom" as="footer" role="contentinfo" {...props}>
        <Footer className="mx-auto" />
    </Navbar>
);

BottomBar.propTypes = {
    bg: string
};

BottomBar.defaultProps = {
    bg: 'white'
};

export default BottomBar;
