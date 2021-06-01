import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { tableReducer } from './tableReducer';
import { ticketReducer } from './ticketReducer';
import { chartReducer } from './chartReducer';


export const rootReducer = combineReducers({
  loginReducer,
  tableReducer,
  ticketReducer,
  chartReducer
});
