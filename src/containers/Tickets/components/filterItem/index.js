import './filterItem.css';

const FilterItem = ({ name, getIdfromFilterInput, id }) => {
    return (
        <>
            <label className="check" >
                <input className="check__input visually-hidden" type="checkbox" id={id} onClick={(e) => getIdfromFilterInput(e)} />
                <span className="check__text">{name}</span>
            </label>
        </>
    )
}


export default FilterItem;