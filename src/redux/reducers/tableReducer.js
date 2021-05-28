import { initState } from '../store/store';
import { PUT_DATA, SAVE_USER, LOAD_USER } from '../types';

export const tableReducer = (state = initState, action) => {
  switch (action.type) {
    case PUT_DATA: {
      return {
        ...state,
        table: action.payload,
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        savedUser: action.payload
      }
    }
    case LOAD_USER: {
      return {
        ...state,
        userId: action.payload
      }
    }
    default: {
      return state;
    }
  }
};
