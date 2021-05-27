import Calendar from './components/calendar';
import CinemaList from './components/cinemaList';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        bgcolor: 'white'
    },
}));

const CinemaBook = () => {
    const classes = useStyles()

    return (
        <>
            <Box className={classes.root} >
                <Box p={1} >
                    <Calendar />
                </Box>
                <Box p={1} >
                    <CinemaList />
                </Box>
            </Box>
        </>
    )
}

export default CinemaBook