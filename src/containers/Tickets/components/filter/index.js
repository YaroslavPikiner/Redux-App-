import './filter.css';
import FilterItem from '../filterItem';

const filterNames = ['Без пересадок', '1 Пересадка', '2 Пересадка', '3 Пересадка'];

const Filter = ({ getIdfromFilterInput }) => {
    return (
        <div className='filter__wrapper'>
            <div className='filter'>
                <div className='filter__list'>
                    <h1 className='filter__title'>Количество Пересадок</h1>
                    {filterNames.map((name, i) => (
                        <FilterItem key={name} id={i} name={name} getIdfromFilterInput={getIdfromFilterInput} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter;