import { initState } from '../store/store';
import { RANDOMIZE_CHART, ADD_ITEM, REMOVE_ITEM } from '../types';

export const chartReducer = (state = initState, action) => {
  switch (action.type) {
    case RANDOMIZE_CHART: {
      console.log(action)
      return {
        ...state,
        data: {
          ...state.data,
          datasets: [
            {
              ...state.data.datasets[0],
              data: action.payload.arr,
            },
          ],
        },
      }
    }
    case REMOVE_ITEM: {
      console.log(action)
      return {
        ...state,
        lengthOfChartLabel: action.payload.length,
        data: {
          labels: [...state.data.labels.slice(0, -1)],
          // [...state.data.labels, action.payload.length]
          datasets: [
            {
              data: action.payload.arr
            },
          ],
        },
      };
    }
    case ADD_ITEM: {
      console.log(action)
      return {
        ...state,
        lengthOfChartLabel: action.payload.length,
        data: {
          labels: [...state.data.labels, action.payload.length],
          datasets: [
            {
              data: action.payload.arr
            },
          ],
        },
      };
    }
    default: {
      return state;
    }
  }
};
