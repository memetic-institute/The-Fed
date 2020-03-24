// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import Footer from './Footer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const Component = () => (
        <Router>
            <Footer />
        </Router>
    );
    render(<Component />, div);
    unmountComponentAtNode(div);
});
