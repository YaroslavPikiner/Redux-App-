import Calendar from './components/calendar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import FilmCard from './components/card';
import { addingDays } from '../../untils/addDays';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    bgcolor: 'white',
  },
}));

const CinemaBook = () => {
  const date = new Date();
  const classes = useStyles();
  const [datas, setDatas] = useState([]);
  const [currentDay, setCurrentDay] = useState({});

  if (!JSON.parse(localStorage.getItem('slots'))) {
    localStorage.setItem('slots', JSON.stringify(datas));
  }

  useEffect(() => {
    setDatas(addingDays());
  }, []);

  useEffect(() => {
    datas.map((item) => (item.date.includes(date) ? setCurrentDay(item) : {}));
  }, [datas]);

  console.log(currentDay, 'currDay');

  const handleChangeDate = (e) => {
    const res = datas.map((item) =>
      item.date.includes(new Date(e) ? setCurrentDay(item) : null)
    );
    return res;
  };

  const handleChangeTime = (e) => {
    let currentSlots = [...currentDay.slots];
    console.log(currentSlots);
    if (currentDay.slots.filter((id) => id === e.currentTarget.id)) {
      currentDay.slots[e.currentTarget.id].isBooked =
        !currentDay.slots[e.currentTarget.id].isBooked;
    }
    setCurrentDay((prevState) => ({
      ...prevState,
      currentSlots,
    }));
  };

  return (
    <>
      <Box className={classes.root} bgcolor='white'>
        <Box p={1}>
          <Calendar handleChangeDate={handleChangeDate} date={date} />
        </Box>
        <Box p={1}>
          <FilmCard
            currentDay={currentDay}
            handleChangeTime={handleChangeTime}
          />
        </Box>
      </Box>
    </>
  );
};

export default CinemaBook;

