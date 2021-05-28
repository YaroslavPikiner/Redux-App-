import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import CalendarPicker from '@material-ui/lab/CalendarPicker';
import Grid from '@material-ui/core/Grid';
import addDays from 'date-fns/addDays'

const Calendar = ({date, handleChangeDate}) => {
  

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid >
                <CalendarPicker
                    allowKeyboardControl={false}
                    minDate={addDays(date, -7)}
                    maxDate={addDays(date, 6)}
                    date={date}
                    onChange={(e) => handleChangeDate(e)}
                />
            </Grid>
        </LocalizationProvider>
    );
}

export default Calendar;