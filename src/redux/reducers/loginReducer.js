import { SIGN_IN, SIGN_OUT, GET_USER_NAME } from '../types';
import { initState } from '../store/store';

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      initState.user = true;
      localStorage.setItem('reactUser', JSON.stringify(true));
      break;
    }
    case SIGN_OUT: {
      initState.user = false;
      localStorage.setItem('reactUser', JSON.stringify(false));
      localStorage.removeItem('googleUser')
      break;
    }
    case GET_USER_NAME: {
      localStorage.setItem('googleUser', JSON.stringify(action.payload))
      return {
        ...state,
        userGoogleInfo: action.payload
      }
    }
    default: {
      return state;
    }
  }
  return state;
};
