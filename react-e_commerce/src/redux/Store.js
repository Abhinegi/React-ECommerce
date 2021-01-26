import {createStore, applyMiddleware  } from 'redux'; 
import rootReducer from './root-reducer';
import { createLogger } from 'redux-logger'

const logger = createLogger({
});

export const store = createStore(rootReducer,applyMiddleware(logger));