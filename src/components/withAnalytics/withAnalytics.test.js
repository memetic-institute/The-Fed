import React from 'react';
import ReactDOM from 'react-dom';
import withAnalytics from './withAnalytics';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<withAnalytics />, div);
    ReactDOM.unmountComponentAtNode(div);
});
