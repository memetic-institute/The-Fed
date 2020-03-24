// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import MoneyTicker from './MoneyTicker';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<MoneyTicker />, div);
    unmountComponentAtNode(div);
});
