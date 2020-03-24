// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PrintButton from './PrintButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<PrintButton />, div);
    unmountComponentAtNode(div);
});
