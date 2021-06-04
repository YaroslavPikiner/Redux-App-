import { RANDOMIZE_CHART, ADD_ITEM, REMOVE_ITEM } from '../types';

export const randomizeChart = (action) => {
  return {
    type: RANDOMIZE_CHART,
    payload: {
      arr: Array.from({ length: action }, () =>
        Math.floor(Math.random() * 40))
    }
  };
};

export const addItem = (action) => {
  console.log(action)
  return {
    type: ADD_ITEM,
    payload: {
      arr: Array.from({ length: action + 1 }, () => Math.floor(Math.random() * 40)),
      length: action + 1
    }
  }
};

export const removeITem = (action) => {
  console.log(action)
  return {
    type: REMOVE_ITEM,
    payload: {
      arr: Array.from({  length: action - 1 }, () =>
      Math.floor(Math.random() * 40)),
      length: action - 1
      
    }
  };
};
