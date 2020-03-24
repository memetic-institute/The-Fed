// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Gameplay from './Gameplay';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Gameplay />, div);
    unmountComponentAtNode(div);
});
