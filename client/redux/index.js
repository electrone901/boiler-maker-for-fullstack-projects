import { combineReducers } from 'redux';
import candiesReducer from './candies-example';
import userReducer from './user';

const appReducer = combineReducers({
  candies: candiesReducer,
  user: userReducer,
});
export default appReducer;
