import Button from '@material-ui/core/Button';

const Slots = ({ time, handleChangeTime, isDisabled }) => {

    return (
        <>
            {time.map((slot, i) => {
                return <Button disabled={isDisabled} onClick={(e) => handleChangeTime(e)} key={i} id={i} >{slot}</Button>
            })}
        </>
    )
}

export default Slots;