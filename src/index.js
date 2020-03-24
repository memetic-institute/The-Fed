import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';
import configureStore from './state/store';
import * as serviceWorker from './serviceWorker';
import ReduxProvider from './components/ReduxProvider';
import App from './components/App';

const { store, persistor, history } = configureStore();
const ConnectedRoot = () => (
    <ReduxProvider store={store} persistor={persistor} history={history}>
        <App />
    </ReduxProvider>
);
const rootElement = document.getElementById('root');

Loadable.preloadReady().then(() =>
    rootElement.hasChildNodes()
        ? hydrate(<ConnectedRoot />, rootElement)
        : render(<ConnectedRoot />, rootElement)
);

// Service Worker
// https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
serviceWorker.unregister();
