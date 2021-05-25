import { initState } from '../store/store';
import { PUT_DATA} from '../types';

export const tableReducer = (state = initState, action) => {
  switch (action.type) {
    case PUT_DATA: {
      return {
        ...state,
        table: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
