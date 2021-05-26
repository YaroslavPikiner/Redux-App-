import { initState } from '../store/store';
import { PUT_DATA, SAVE_USER, PUT_USER } from '../types';

export const tableReducer = (state = initState, action) => {
  switch (action.type) {
    case PUT_DATA: {
      return {
        ...state,
        table: action.payload,
      };
    }
    case PUT_USER: {
      return {
        ...state,
        userId: action.payload,
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        savedUser: action.payload
      }
    }
  }
  return state;
};
