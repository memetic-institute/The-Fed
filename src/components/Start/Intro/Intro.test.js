// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Intro from './Intro';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Intro />, div);
    unmountComponentAtNode(div);
});
