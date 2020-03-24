// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import MoneyPrinting from './MoneyPrinting';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<MoneyPrinting />, div);
    unmountComponentAtNode(div);
});
