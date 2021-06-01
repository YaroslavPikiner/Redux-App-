import { RANDOMIZE_CHART, ADD_ITEM, REMOVE_ITEM } from '../types';

export const randomizeChart = () => {
  return {
    type: RANDOMIZE_CHART,
  };
};

export const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

export const removeITem = () => {
  return {
    type: REMOVE_ITEM,
  };
};
