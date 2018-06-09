import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './jira/reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { receiveServerInfo } from './jira/actions'
import { saga } from './jira/saga'

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

store.dispatch(receiveServerInfo({version : '1.2.3'}))
const action = type => store.dispatch({type})

