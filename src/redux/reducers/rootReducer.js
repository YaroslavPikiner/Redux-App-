import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { tableReducer } from './tableReducer';
import { ticketReducer } from './ticketReducer';

export const rootReducer = combineReducers({
  loginReducer,
  tableReducer,
  ticketReducer,
});
