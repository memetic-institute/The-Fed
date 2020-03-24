// eslint-ignore

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Tweet from './Tweet';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Tweet />, div);
    unmountComponentAtNode(div);
});
