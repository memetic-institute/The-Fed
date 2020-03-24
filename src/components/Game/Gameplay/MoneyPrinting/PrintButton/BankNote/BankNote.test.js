// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import BankNote from './BankNote';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<BankNote />, div);
    unmountComponentAtNode(div);
});
