// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import EndGameWarning from './EndGameWarning';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<EndGameWarning />, div);
    unmountComponentAtNode(div);
});
