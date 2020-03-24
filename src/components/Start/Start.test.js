// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Start from './Start';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Start />, div);
    unmountComponentAtNode(div);
});
