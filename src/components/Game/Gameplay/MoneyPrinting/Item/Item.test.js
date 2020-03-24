// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Item from './Item';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Item />, div);
    unmountComponentAtNode(div);
});
