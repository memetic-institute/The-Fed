import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer from '../modules';

const history = createBrowserHistory();

const configureStore = () => {
    // Middeware
    const middleware = [thunk, routerMiddleware(history)];

    // Create Store
    const initialState = {};
    const store = createStore(
        createRootReducer(history),
        initialState,
        applyMiddleware(...middleware)
    );

    return store;
};

export default () => {
    const store = configureStore();
    const persistor = persistStore(store);
    return { store, persistor, history };
};
