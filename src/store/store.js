import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {counterReducer} from './reducers';

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counterReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
