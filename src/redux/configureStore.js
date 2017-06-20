import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import * as reducers from 'redux/reducers';


const appReducer = (
  enableBatching(
    combineReducers({
      ...reducers
    })
  )
);

export default () => {
  console.log('reducers: ', reducers);
  const store = createStore(
    appReducer,
    compose(
      applyMiddleware(
        thunk,
        createLogger(),
      )
    )
  );

  return store;
};
