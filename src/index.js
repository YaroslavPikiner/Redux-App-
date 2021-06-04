import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProvideAuth } from './hooks/use-auth';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import './index.css';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { watchLoadData } from './redux/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagasMiddleWare = createSagaMiddleWare();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, sagasMiddleWare),
  )
);
sagasMiddleWare.run(watchLoadData)

render(
  <Provider store={store}>
    <ProvideAuth>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProvideAuth>
  </Provider>,
  document.getElementById('root')
);
