import Button from '@material-ui/core/Button';

const Slots = ({ time, handleChangeTime }) => {
    return (
        <>
            {time.map(item => {
                return <Button variant={item.isBooked ? 'contained' : 'outlined'} onClick={(e) => handleChangeTime(e)} key={item.id} id={item.id} >{item.slots}</Button>
            })}
        </>
    )
}

export default Slots;