import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import game from './game';
import modal from './modal';
import preferences from './preferences';

const persistReducers = {
    game,
    preferences
};

const configuredPersistReducers = Object.keys(persistReducers).reduce(
    (acc, key) => {
        acc[key] = persistReducer(
            {
                key,
                storage,
                stateReconciler: autoMergeLevel2,
                blacklist: ['activeFilter']
            },
            persistReducers[key]
        );
        return acc;
    },
    {}
);

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        modal,
        ...configuredPersistReducers
    });

export default createRootReducer;
