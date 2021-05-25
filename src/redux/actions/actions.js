import {
  SIGN_OUT,
  SIGN_IN,
  CHEAP_TICKET,
  FAST_TICKET,
  OPTIMAL_TICKET,
} from '../types';

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

export const cheapTicket = () => {
  return {
    type: CHEAP_TICKET,
  };
};

export const fastTicket = () => {
  return {
    type: FAST_TICKET,
  };
};

export const optimalTicket = () => {
  return {
    type: OPTIMAL_TICKET,
  };
};

