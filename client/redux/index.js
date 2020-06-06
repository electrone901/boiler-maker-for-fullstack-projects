import { combineReducers } from 'redux';
import candiesReducer from './candies-example';

const appReducer = combineReducers({
  candies: candiesReducer,
});
export default appReducer;
