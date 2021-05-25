import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { fiterReducer } from './filterTicketsReducer';
import { tableReducer } from './tableReducer';

export const rootReducer = combineReducers({
  loginReducer,
  fiterReducer,
  tableReducer,
});
