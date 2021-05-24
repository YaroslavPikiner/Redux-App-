import { convertDurationToHours, convertDate, convertMinToHours } from '../../../../../untils/time';

const Row = ({ segments, item }) => {
    return (
        <>
            <div className='ticket__item-part' key={item.segments[0].duration}>
                <span>{segments.origin}-{segments.destination}</span>
                <span>{convertDate(segments.date)} - {convertDurationToHours(segments.date, segments.duration)}</span>
            </div>
            <div className='ticket__item-part'>
                <span>В ПУТИ</span>
                <span>{convertMinToHours(segments.duration)}</span>
            </div>
            <div className='ticket__item-part'>
                <span>{segments.stops.length} ПЕРЕСАДКИ</span>
                {
                    segments.stops.length === 0 ?
                        <span>Пересадок нету</span> :
                        <span>{segments.stops.map(item => <>{item} </>)}</span>
                }
            </div>
        </>
    )
}

export default Row;