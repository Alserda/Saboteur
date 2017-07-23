import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistState } from 'redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies

import rootReducer from 'redux/reducers/index';
import { DevTools } from 'containers';

const enhancer = () => compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  ),
);


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer());

  if (module.hot) {
    module.hot.accept('redux/reducers', () => {
      const nextRootReducer = require('redux/reducers/index'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  console.log(store.getState());

  return store;
}
