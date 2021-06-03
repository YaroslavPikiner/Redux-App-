import { LOAD_DATA, PUT_DATA, SEND_USER } from '../types';

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

export const sendUser = (data) => {
  return {
    type: SEND_USER,
    payload: data
  }
}