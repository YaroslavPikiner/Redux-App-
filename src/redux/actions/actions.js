import {
  SIGN_OUT,
  SIGN_IN,
  CHEAP_TICKET,
  FAST_TICKET,
  OPTIMAL_TICKET,
  LOAD_DATA,
  PUT_DATA,
  LOAD_TICKETS,
  PUT_TICKETS,
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

export const loadData = () => {
  return {
    type: LOAD_DATA,
  };
};

export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer,
  };
};

export const loadTickets = () => {
  return {
    type: LOAD_TICKETS,
  };
};

export const putTickets = (dataFromServer) => {
  return {
    type: PUT_TICKETS,
    payload: dataFromServer,
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
