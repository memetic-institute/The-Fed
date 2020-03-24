// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Modal from './Modal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Modal />, div);
    unmountComponentAtNode(div);
});
