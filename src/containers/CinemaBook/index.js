import Calendar from './components/calendar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import FilmCard from './components/card';
import { useState } from 'react';

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
    const [slots, setSlots] = useState([
        {
            slots: '10:00',
            id: '0',
            isBooked: false,
        },
        {
            slots: '12:00',
            id: '1',
            isBooked: false,
        },
        {
            slots: '14:00',
            id: '2',
            isBooked: false,
        },
        {
            slots: '16:00',
            id: '3',
            isBooked: false,
        },
        {
            slots: '18:00',
            id: '4',
            isBooked: false,
        },
        {
            slots: '20:00',
            id: '5',
            isBooked: false,
        },
        {
            slots: '22:00',
            id: '6',
            isBooked: false,
        },
    ]);
    const [times, setTimes] = useState({});
    const [index, setIndex] = useState([]);
    const [currDay, setCurrDay] = useState()

    if (!JSON.parse(localStorage.getItem('slots'))) {
        (localStorage.setItem('slots', JSON.stringify(slots)))
    }

    const handleChangeDate = (e) => {
        const currData = new Date(e);
        setTimes((prevState) => ({
            ...prevState,
            day: currData.getDate(),
            mounth: currData.getMonth(),
            year: currData.getFullYear(),
            time: slots,
        }));
        localStorage.setItem(String(currData.getDate()), JSON.stringify(times));
        setCurrDay(JSON.parse(localStorage.getItem(currData.getDate())))
    };

    const handleChangeTime = (e) => {
        let currentSlots = [...slots]
        slots[e.currentTarget.id].isBooked = !slots[e.currentTarget.id].isBooked
        setTimes((prevState) => ({
            ...prevState,
            time: currentSlots,
        }));
        localStorage.setItem('slots', JSON.stringify(slots))
    };

    console.log(index, 'index')
    console.log(times, 'time')
    console.log(slots, 'slots')

    return (
        <>
            <Box className={classes.root} bgcolor="white">
                <Box p={1}>
                    <Calendar handleChangeDate={handleChangeDate} date={date} />
                </Box>
                <Box p={1}>
                    <FilmCard time={JSON.parse(localStorage.getItem('slots'))} handleChangeTime={handleChangeTime} />
                </Box>
            </Box>
        </>
    );
};

export default CinemaBook;
