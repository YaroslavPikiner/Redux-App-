import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';

const Slots = ({ currentDay, handleChangeTime }) => {
  console.log(currentDay)
  return (
    <>
      {currentDay.slots ? (
        currentDay.slots.map((slot) => {
          return (
            <Button
              variant={slot.isBooked ? 'contained' : 'outlined'}
              key={slot.id}
              id={slot.id}
              onClick={(e) => handleChangeTime(e)}>
              {slot.timeslot}:00
            </Button>
          );
        })
      ) : (
        <Loader
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
    </>
  );
};

export default Slots;
