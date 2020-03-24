import React from 'react';
import { shape, oneOfType, arrayOf, node } from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConnectedRouter } from 'connected-react-router';

const ReduxProvider = ({ store, persistor, history, children }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>{children}</ConnectedRouter>
        </PersistGate>
    </Provider>
);

ReduxProvider.propTypes = {
    store: shape({}).isRequired,
    persistor: shape({}).isRequired,
    history: shape({}).isRequired,
    children: oneOfType([arrayOf(node), node]).isRequired
};

export default ReduxProvider;
