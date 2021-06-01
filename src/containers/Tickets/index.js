import Filter from './components/filter';
import TicketList from './components/ticketList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadTickets, addTickets, addFilterMark,
  removeFilterMark, setTicketsToFilter, getFilteredTicket, cheapTicket, fastTicket, optimalTicket
} from '../../redux/actions/tickets';
import './home.css';

const Tickets = () => {
  const dispatch = useDispatch();
  const ticketsItems = useSelector((state) => state.ticketReducer.tickets);
  const listItem = useSelector((state) => state.ticketReducer.listItem);
  const filters = useSelector((state) => state.ticketReducer.filters);
  const filteredTicket = useSelector((state) => state.ticketReducer.filteredTickets)

  useEffect(() => {
    filterTickets();
  }, [filters]);

  useEffect(() => {
    dispatch(loadTickets());
  }, []);

  const addTicketItems = () => {
    dispatch(addTickets({}))
  };

  const getIdfromFilterInput = (e) => {
    if (filters.includes(e.target.id)) {
      dispatch(removeFilterMark(e.target.id))
    } else {
      dispatch(addFilterMark(e.target.id))
    };
  }

  const filterTickets = () => {
    if (filters.length) {
      dispatch(getFilteredTicket({}))
    } else {
      dispatch(setTicketsToFilter({}))
    }
  };

  const getValueFromToolBar = (event) => {
    filterTickets()
    switch (event.currentTarget.id) {
      case '0': {
        dispatch(setTicketsToFilter({}))
        dispatch(cheapTicket({}))
        break;
      }
      case '1': {
        dispatch(fastTicket({}))
        break;
      }
      case '2': {
        return dispatch(optimalTicket({}))
      }
      default: {
        return
      }
    }
  };

  return (
    <>
      <div className='logo__plane'></div>
      <div className='home'>
        <Filter getIdfromFilterInput={getIdfromFilterInput} />
        <TicketList
          filteredTicket={
            filteredTicket.length === 0 ? ticketsItems : filteredTicket
          }
          getValueFromToolBar={getValueFromToolBar}
          addTicketItems={addTicketItems}
          listItem={listItem}
        />
      </div>
    </>
  );
};

export default Tickets;
