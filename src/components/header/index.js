import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }, 
}));

export default function Header({ user, signout }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">
              <Link to='/' className='logo'>
                Aviasales
              </Link>
            </Button>
          </Typography>

          {user ? (
            <>
              <Button color="inherit">
                <Link to='/cinemabook' className='logo'>
                  Cinema book
                </Link>
              </Button>
              <Button color="inherit">
                <Link to='/table' className='logo'>
                  Table
                </Link>
              </Button>
              <Button color="inherit">
                <Link to='/tickets' className='logo'>
                  Tickets
                </Link>
              </Button>
              <Button color="inherit">
                <Link to='/login' onClick={signout} className='nav-visible-seach button'>
                  Logout
                </Link>
              </Button>
            </>
          ) : (
            <Button color="inherit">
              <Link
                to='/login'
                className='nav-visible-seach button'>
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}