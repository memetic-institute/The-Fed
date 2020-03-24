// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Card />, div);
    unmountComponentAtNode(div);
});
