
import './ticket.css';
import Row from './components/row';

const Ticket = ({ item, id }) => {
    return (
        <div className='wrapper'>
            <div className='ticket'>
                <div className='ticket__head'>
                    <h2>{(item.price).toLocaleString('ru')} Р</h2>
                    <div className='ticket__logo'></div>
                </div>
                <div className='ticket__list'>
                    <div className='ticket__item--from'>
                        <Row key={id} item={item} segments={item.segments[0]} />
                    </div>
                    <div className='ticket__item--to'>
                        <Row key={id} item={item} segments={item.segments[1]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
// 16 25
export default Ticket;