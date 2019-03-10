import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { loadState, saveState } from './localStorage';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const peristedState = loadState();

const store = createStore(
  connectRouter(history)(rootReducer),
  peristedState,
  composedEnhancers,
);

store.subscribe(() => {
  saveState({
    admin: store.getState().admin,
  });
});

sagaMiddleware.run(rootSaga);

export default store;
