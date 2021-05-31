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
  const [currentDay, setCurrentDay] = useState([]);

  const res1 = () => {datas.map((item) =>
    item.date.includes(date) ? setCurrentDay(item) : null
  )};
  console.log(currentDay);

  if (!JSON.parse(localStorage.getItem('slots'))) {
    localStorage.setItem('slots', JSON.stringify(datas));
  }

  useEffect(() => {
    setDatas(addingDays());
  }, []);

  const handleChangeDate = (e) => {
    const res = datas.map((item) =>
      item.date.includes(new Date(e) ? setCurrentDay(item) : null)
    );
    console.log(currentDay);
    return res;
  };

  const handleChangeTime = (e) => {
    console.log(e.currentTarget.id);
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

// const handleChangeDate = (e) => {
//     const currData = new Date(e);
//     setTimes((prevState) => ({
//       ...prevState,
//       day: currData.getDate(),
//       mounth: currData.getMonth(),
//       year: currData.getFullYear(),
//       time: slots,
//     }));
//     localStorage.setItem(String(currData.getDate()), JSON.stringify(times));
//     setCurrDay(JSON.parse(localStorage.getItem(currData.getDate())));
//   };

//   const handleChangeTime = (e) => {
//     let currentSlots = [...slots];
//     if (index.includes(e.currentTarget.id)) {
//       setIndex((index) => index.filter((id) => id !== e.currentTarget.id));
//     } else {
//       setIndex((index) => index.concat(e.currentTarget.id));
//     }
//     slots[e.currentTarget.id].isBooked = !slots[e.currentTarget.id].isBooked;
//     setSlots(currentSlots);
//     localStorage.setItem('slots', JSON.stringify(slots));
//     setTimes((prevState) => ({
//       ...prevState,
//       time: currentSlots,
//     }));
//   };
