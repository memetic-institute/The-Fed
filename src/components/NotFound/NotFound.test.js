// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const Component = () => (
        <Router>
            <NotFound />
        </Router>
    );
    render(<Component />, div);
    unmountComponentAtNode(div);
});
