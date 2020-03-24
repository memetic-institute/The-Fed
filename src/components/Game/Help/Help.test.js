// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Help from './Help';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Help />, div);
    unmountComponentAtNode(div);
});
