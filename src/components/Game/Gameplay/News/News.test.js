// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import News from './News';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<News />, div);
    unmountComponentAtNode(div);
});
