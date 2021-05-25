import Filter from './components/filter';
import TicketList from './components/ticketList';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTickets } from '../../redux/actions/actions';

import './home.css';
import { ArrowForwardIosTwoTone } from '@material-ui/icons';

const Tickets = () => {
  const [listItem, setListItem] = useState(5);
  const [filters, setFilters] = useState([]);
  const [filteredTicket, setFilteredTicket] = useState([]);
  const [ticketsItems, setTicketsItems] = useState([]);
  const tickets = useSelector((state) => state.tableReducer.tickets);
  const dispatch = useDispatch();
  console.log(ticketsItems);

  const getObj = async () => {
    const setTickets = await tickets.tickets;
    return setTicketsItems(setTickets);
  };

  const addTicketItems = () => {
    
    setListItem((prev) => (prev += 5));
  };

  const getIdfromFilterInput = (e) => {
    if (filters.includes(e.target.id)) {
      setFilters((filters) => filters.filter((id) => id !== e.target.id));
    } else {
      setFilters((filters) => filters.concat(e.target.id));
    }
  };

  const filterTickets = () => {
    setFilteredTicket(ticketsItems);
    if (filters.length) {
      setFilteredTicket((filteredTicket) =>
        filteredTicket.filter((item) =>
          filters.includes(item.segments[1].stops.length.toString())
        )
      );
    } else {
      setFilteredTicket(ticketsItems);
    }
  };

  const getValueFromToolBar = (e) => {
    let result;
    switch (e.target.id) {
      case '0': {
        result = ticketsItems.sort((a, b) => a.price - b.price);
        break;
      }
      case '1': {
        result = ticketsItems.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        );
        break;
      }
      case '2': {
        const filteredPrice = ticketsItems.sort((a, b) => a.price - b.price);
        const addIndexToFilteredPrice = ticketsItems.map(
          (item, i) => (item.priceIdx = i)
        );
        // add price ID
        const filteredDuration = ticketsItems.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        );
        const addIndexToFilteredDuration = ticketsItems.map(
          (item, i) => (item.durrIdx = i)
        );
        // add duration ID
        const addResIndex = ticketsItems.map(
          (item) => (item.res = item.priceIdx + item.durrIdx)
        );
        const filteredFromResIndex = ticketsItems.sort((a, b) => a.res - b.res);
        // sum result price and durr
        result = filteredFromResIndex;
        break;
      }
      default: {
        return result;
      }
    }
    setFilteredTicket([...result]);
    setTicketsItems([...result]);
  };

  useEffect(() => {
    filterTickets();
  }, [filters]);

  useEffect(() => {
    dispatch(loadTickets());
    getObj();
  }, []);

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
