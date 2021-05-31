import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import PrivateRoute from './protectedRoutes';
import Header from '../components/header/index';
import Home from '../containers/Home/index';
import Login from '../containers/Login/index';
import UserTable from '../containers/Table/index';
import Tickets from '../containers/Tickets/index';
import TableItem from '../containers/Table/components/tableItem/index';
import CinemaBook from '../containers/CinemaBook/index';
import Charts from '../containers/Charts/index';

import { useAuth } from '../hooks/use-auth';


const Routes = () => {
    const { user, signout, login } = useAuth();
    return (
        <Router>
            <Header signout={signout} user={user} />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/login' component={() => <Login login={login} signout={signout} />} />
                <Route path='/table/:id' component={() => <TableItem user={user} />} />
                <PrivateRoute exact user={user} path='/table' component={UserTable} />
                <PrivateRoute user={user} path='/tickets' component={Tickets} />
                <PrivateRoute user={user} path='/cinemabook' component={CinemaBook} />
                <PrivateRoute user={user} path='/charts' component={Charts} />
            </Switch>
        </Router >
    )
}
export default Routes;