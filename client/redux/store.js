import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './index';
import { createLogger } from 'redux-logger';

const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);
export default store;
