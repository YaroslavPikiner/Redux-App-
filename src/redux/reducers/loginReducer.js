import { SIGN_IN, SIGN_OUT, PUT_DATA } from '../types';
import { initState } from '../store/store';

export const loginReducer = (state = initState.user, action) => {
  switch (action.type) {
    case SIGN_IN: {
      initState.user = true;
      break;
    }
    case SIGN_OUT: {
      initState.user = false;
      break;
    }
    case PUT_DATA: {
      console.log(initState)
      break;
    }
    default: {
      return state;
    }
  }
  return state;
};
