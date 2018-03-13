import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

import PrivateRoute from './PrivateRoute.js';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashboard} />
                <PrivateRoute path='/create' component={AddExpense} />
                <PrivateRoute path='/edit/:id' component={EditExpense} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
