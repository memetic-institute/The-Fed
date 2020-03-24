// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import TopBar from './TopBar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<TopBar />, div);
    unmountComponentAtNode(div);
});
