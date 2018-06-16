import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import rootReducer from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { saga } from './saga'
import { ensureHandlesValid, mockBackend } from './actions'

const persistConfig = {
  key: 'services',
  whitelist: ['handles', 'system'],
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger),
)
sagaMiddleware.run(saga)
const persistor = persistStore(store, null, function() {
  // Ensure that store is not corrupted
  store.dispatch(ensureHandlesValid())
  // Enable mocking if system configured to do so
  store.dispatch(mockBackend(store.getState().system.mock))
})

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

