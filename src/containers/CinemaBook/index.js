import Calendar from './components/calendar';
import CinemaList from './components/cinemaList';
import Box from '@material-ui/core/Box';

const CinemaBook = () => {

    return (
        <>
            <Box display="flex" justifyContent="space-around" m={1} p={1} bgcolor="background.paper">
                <Box p={1} bgcolor="grey.300">
                    <CinemaList />
                </Box>
                <Box p={1} bgcolor="grey.300">
                    <Calendar />
                </Box>
            </Box>
        </>
    )
}

export default CinemaBook