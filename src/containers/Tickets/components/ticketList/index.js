import './ticketList.css';
import Ticket from '../ticket/index';
import Tabs from '../tabs/index';
import Loader from 'react-loader-spinner';

const TicketList = ({
  filteredTicket,
  addTicketItems,
  getValueFromToolBar,
  listItem,
}) => {
  const loader = () => {
    return (
      <Loader
        type='Puff'
        color='#00BFFF'
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  };

  return (
    <>
      <div className='ticketList'>
        <Tabs getValueFromToolBar={getValueFromToolBar} />
        {filteredTicket ?
          filteredTicket
            .slice(0, listItem)
            .map((item) => <Ticket key={item.price} item={item} />) : loader}
        <button className='btn_more' onClick={addTicketItems}>
          Показать еще 5 билетов
        </button>
      </div>
    </>
  );
};

export default TicketList;
