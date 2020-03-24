import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeAudio from './YouTubeAudio';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<YouTubeAudio />, div);
    ReactDOM.unmountComponentAtNode(div);
});
