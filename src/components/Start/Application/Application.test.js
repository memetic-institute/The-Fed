// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Application from './Application';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Application />, div);
    unmountComponentAtNode(div);
});
