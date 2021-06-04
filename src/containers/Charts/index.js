import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Bar, Line, Pie, Radar, PolarArea } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import {
  randomizeChart,
  addItem,
  removeITem,
} from '../../redux/actions/charts';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Charts = () => {
  const classes = useStyles();
  const tabsName = ['Randomize', 'Add', 'Remove'];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartReducer.data);
  const lenghtCharts = useSelector((state) => state.chartReducer.lengthOfChartLabel)

  const getValueCharts = (e) => {
    switch (e.currentTarget.value) {
      case 'Randomize':
        return dispatch(randomizeChart(lenghtCharts));
      case 'Add':
        return dispatch(addItem(lenghtCharts));
      case 'Remove':
        return dispatch(removeITem(lenghtCharts));
      default:
        return null;
    }
  };
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item>
          <Bar
            height={500}
            width={600}
            data={data}
            options={{ maintainAspectRatio: false }}
          />
        </Grid>
        <Grid item>
          <Line
            height={500}
            width={600}
            data={data}
            options={{ maintainAspectRatio: false }}
          />
        </Grid>
        <Grid item>
          <Pie
            height={500}
            width={600}
            data={data}
            options={{ maintainAspectRatio: false }}
          />
        </Grid>
        <Grid item>
          <Radar
            height={500}
            width={600}
            data={data}
            options={{ maintainAspectRatio: false }}
          />
        </Grid>
        <Grid item>
          <PolarArea
            height={500}
            width={600}
            data={data}
            options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item className={classes.root}>
          {tabsName.map((item, i) => (
            <ButtonGroup key={i} aria-label='outlined primary button group'>
              <Button id={i} value={item} onClick={(e) => getValueCharts(e)}>
                {item}
              </Button>
            </ButtonGroup>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Charts;
