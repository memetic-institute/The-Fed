// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Welcome from './Welcome';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Welcome />, div);
    unmountComponentAtNode(div);
});
