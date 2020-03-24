// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Update from './Update';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Update />, div);
    unmountComponentAtNode(div);
});
