import { initState } from '../store/store';
import {
  PUT_TICKETS, ADD_TICKETS_ITEMS, REMOVE_FILTER_MARK, ADD_FILTER_MARK, GET_FILTERED_TICKET, SET_TICKETS_TO_FILTER,
  CHEAP_TICKET,
  FAST_TICKET,
  OPTIMAL_TICKET
} from '../types';

export const ticketReducer = (state = initState, action) => {
  switch (action.type) {

    case PUT_TICKETS: {
      return {
        ...state,
        tickets: action.payload,
      };
    }
    case ADD_TICKETS_ITEMS: {
      return {
        ...state,
        listItem: state.listItem + 5
      }
    }
    case ADD_FILTER_MARK: {
      return {
        ...state,
        filters: state.filters.concat(action.payload)
      }
    }
    case REMOVE_FILTER_MARK: {
      return {
        ...state,
        filters: state.filters.filter((id) => id !== action.payload)
      }
    }
    case GET_FILTERED_TICKET: {
      return {
        ...state,
        filteredTickets: state.filteredTickets.filter((item) =>
          state.filters.includes(item.segments[1].stops.length.toString())
        )
      }
    }
    case SET_TICKETS_TO_FILTER: {
      return {
        ...state,
        filteredTickets: state.tickets
      }
    }
    case CHEAP_TICKET: {
      return {
        ...state,
        filteredTickets: [...state.filteredTickets].sort((a, b) => a.price - b.price),
      }
    }
    case FAST_TICKET: {
      return {
        ...state,
        filteredTickets: [...state.filteredTickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration),
      }
    }
    case OPTIMAL_TICKET: {
      return {
        ...state,
        filteredTickets: state.filteredTickets.sort((a, b) => a.res - b.res)
      }
    }
    default: {
      return state;
    }
  }
};
