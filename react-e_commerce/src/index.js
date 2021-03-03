import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/Store';
import  {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <PersistGate persistor={persistor}>
   <Provider store={store}> <BrowserRouter> <App /></BrowserRouter> </Provider>
   </PersistGate> ,
  document.getElementById('root')
);

