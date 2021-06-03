import { initState } from '../store/store';
import { RANDOMIZE_CHART, ADD_ITEM, REMOVE_ITEM } from '../types';

export const chartReducer = (state = initState, action) => {
  switch (action.type) {
    case RANDOMIZE_CHART: {
      return {
        ...state,
        data: {
          datasets: [
            {
              data: Array.from({ length: state.lengthOfChartLabel }, () =>
                Math.floor(Math.random() * 40)
              ),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
            },
          ],
        },
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        data: {
          labels: state.data.labels.filter(
            (item) => item !== state.data.labels.length - 1
          ),
          datasets: [
            {
              data: Array.from({ length: state.lengthOfChartLabel - 1 }, () =>
                Math.floor(Math.random() * 40)
              ),
            },
          ],
        },
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        data: {
          labels: [...state.data.labels, state.lengthOfChartLabel],
          datasets: [
            {
              data: Array.from({ length: { ...state.lengthOfChartLabel + 1 } }, () =>
                Math.floor(Math.random() * 40)
              ),
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
