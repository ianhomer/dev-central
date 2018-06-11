import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addService } from './actions'
import { saga } from './saga'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();


store.dispatch(addService('localhost'))
//store.dispatch(receiveServiceInfo({version : '1.2.5'}))
//const action = type => store.dispatch({type})

