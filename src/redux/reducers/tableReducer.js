import { initState } from '../store/store';
import { PUT_DATA, PUT_TICKETS} from '../types';

export const tableReducer = (state = initState, action) => {
  switch (action.type) {
    case PUT_DATA: {
      return {
        ...state,
        table: action.payload,
      };
    }
    case PUT_TICKETS: {
      return {
        ...state,
        tickets: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
