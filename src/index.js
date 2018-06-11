import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { receiveServerInfo } from './actions'
import { saga } from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

store.dispatch(receiveServerInfo({version : '1.2.5'}))
//const action = type => store.dispatch({type})

