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

  useEffect(() => {
    datas.forEach((item) => {
      if (new Date(item.date).getDate() == date.getDate()) {
        setCurrentDay(item);
      }
    });
  }, [datas]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('datas'))) {
      setDatas(addingDays());
    } else {
      setDatas(JSON.parse(localStorage.getItem('datas')));
    }
  }, []);

  const handleChangeDate = (e) => {
    datas.forEach((item) => {
      if (new Date(item.date).getDate() == new Date(e).getDate()) {
        setCurrentDay(item);
      } else {
        return null;
      }
    });
  };

  const handleChangeTime = (e) => {
    let currentSlots = [...currentDay.slots];
    if (currentDay.slots.filter((id) => id === e.currentTarget.id)) {
      currentDay.slots[e.currentTarget.id].isBooked = !currentDay.slots[e.currentTarget.id].isBooked;
    }

    setCurrentDay((prevState) => ({ ...prevState, currentSlots }));

    localStorage.setItem('datas', JSON.stringify(datas));
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
