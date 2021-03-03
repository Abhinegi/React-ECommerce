import {createStore, applyMiddleware  } from 'redux'; 
import rootReducer from './root-reducer';
import { createLogger } from 'redux-logger';
import {persistStore} from 'redux-persist';

const logger = createLogger({
});


export const store = createStore(rootReducer,applyMiddleware(logger));
export const persistor = persistStore(store);

export default {store,persistor};