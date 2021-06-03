import {
  CHEAP_TICKET,
  FAST_TICKET,
  OPTIMAL_TICKET,
  LOAD_TICKETS,
  PUT_TICKETS,
  ADD_TICKETS_ITEMS,
  REMOVE_FILTER_MARK,
  ADD_FILTER_MARK,
  SET_TICKETS_TO_FILTER,
  GET_FILTERED_TICKET,
  SAVE_USER,
} from '../types';


export const saveUser = (data) => {
  return {
    type: SAVE_USER,
    payload: data
  }
}

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

export const addTickets = () => {
  return {
    type: ADD_TICKETS_ITEMS
  }
}

export const addFilterMark = (id) => {
  return {
    type: ADD_FILTER_MARK,
    payload: id
  }
}

export const removeFilterMark = (id) => {
  return {
    type: REMOVE_FILTER_MARK,
    payload: id
  }
}

export const setTicketsToFilter = () => {
  return {
    type: SET_TICKETS_TO_FILTER,
  }
}

export const getFilteredTicket = () => {
  return {
    type: GET_FILTERED_TICKET
  }
}
