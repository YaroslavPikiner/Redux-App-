import Button from '@material-ui/core/Button';

const Slots = ({ currentDay, handleChangeTime }) => {
    console.log(currentDay);
    return (
        <>
            {/* {time ? time.map(item => {
                return <Button variant={item.slots.isBooked ? 'contained' : 'outlined'} onClick={(e) => handleChangeTime(e)} key={item.id} id={item.id}>{item.timeslot}: 00</Button>
            }) :  <h1>alalal</h1>} */}
           
        </>
    )
}

export default Slots;