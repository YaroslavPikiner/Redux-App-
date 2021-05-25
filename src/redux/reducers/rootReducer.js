import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { fiterReducer } from './filterTicketsReducer';

export const rootReducer = combineReducers({
  loginReducer,
  fiterReducer,
});
