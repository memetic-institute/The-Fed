import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './ReduxProvider';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReduxProvider />, div);
    ReactDOM.unmountComponentAtNode(div);
});
