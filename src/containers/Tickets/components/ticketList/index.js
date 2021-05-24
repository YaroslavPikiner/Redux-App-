import './ticketList.css';
import Ticket from '../ticket/index';
import Tabs from '../tabs/index';

const TicketList = ({ filteredTicket, addTicketItems, getValueFromToolBar, listItem }) => {
    return (
        <>
            <div className='ticketList'>
                <Tabs getValueFromToolBar={getValueFromToolBar} />
                {
                    filteredTicket.length && filteredTicket.slice(0, listItem).map(item => <Ticket key={item.price} item={item} />)
                }
                <button className='btn_more' onClick={addTicketItems}>Показать еще 5 билетов</button>
            </div>
        </>
    )
}

export default TicketList;