// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import NavbarButton from './NavbarButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<NavbarButton />, div);
    unmountComponentAtNode(div);
});
