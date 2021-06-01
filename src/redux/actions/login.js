import { SIGN_OUT, SIGN_IN, GET_USER_NAME } from '../types';

export const login = () => {
  return {
    type: SIGN_IN,
  };
};

export const logout = () => {
  return {
    type: SIGN_OUT,
  };
};

export const getUserInfoFromGoogle = (userInfo) => {
  return {
    type: GET_USER_NAME,
    payload: userInfo,
  };
};
