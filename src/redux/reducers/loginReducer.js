import { SIGN_IN, SIGN_OUT } from '../types';
import { initState } from '../store/store';

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      initState.user = true;
      break;
    }
    case SIGN_OUT: {
      initState.user = false;
      break;
    }
    default: {
      return state;
    }
  }
  return state;
};
