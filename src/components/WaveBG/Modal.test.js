// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import WaveBG from './WaveBG';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<WaveBG />, div);
    unmountComponentAtNode(div);
});
