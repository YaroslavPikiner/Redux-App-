import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import PrivateRoute from './protectedRoutes';
import Header from '../components/header';
import Home from '../containers/Home/index';
import Login from '../containers/Login/index';
import UserTable from '../containers/Table/index';
import Tickets from '../containers/Tickets/index';
import TableItem from '../containers/Table/index';
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
                <Route path='/login'>
                    <Login login={login} signout={signout} />
                </Route>
                <PrivateRoute user={user} path='/table' component={UserTable} />
                <Route path='/table/:id' >
                    <TableItem user={user} />
                </Route>
                <PrivateRoute user={user} path='/tickets' component={Tickets} />
            </Switch>
        </Router>
    )
}

export default Routes;