// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Store from './Store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Store />, div);
    unmountComponentAtNode(div);
});
