// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import BottomBar from './BottomBar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<BottomBar />, div);
    unmountComponentAtNode(div);
});
