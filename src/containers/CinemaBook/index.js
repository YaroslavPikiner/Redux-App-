import Calendar from './components/calendar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import FilmCard from './components/card';
import { useState } from 'react'

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
    const classes = useStyles()
    const [time, setTime] = useState(['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'])
    const [isDisabled, setIsDisabled] = useState(false)
    const [idx, setIdx] = useState([])
    const date = new Date();

    const handleChangeDate = (e) => {
        console.log(e)
    }

    const handleChangeTime = (e) => {
        if (idx.includes(e.currentTarget.id)) {
            setIdx((idx) => idx.filter((id) => id !== e.currentTarget.id));
        } else {
            setIdx((idx) => idx.concat(e.currentTarget.id));
        }
    }
    console.log(idx)
    return (
        <>
            <Box className={classes.root} bgcolor='white' >
                <Box p={1} >
                    <Calendar handleChangeDate={handleChangeDate} date={date} />
                </Box>
                <Box p={1} >
                    <FilmCard isDisabled={isDisabled} time={time} handleChangeTime={handleChangeTime} />
                </Box>
            </Box>
        </>
    )
}

export default CinemaBook