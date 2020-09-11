import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import { RecoverScreen } from '../components/RecoverScreen/RecoverScreen';
import { NotFoundScreen } from '../components/NotFoundScreen/NotFoundScreen';
import App from '../App';

export const AuthRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route path="/login" component={LoginScreen} exact />
                    <Route path="/recuperacion" component={RecoverScreen} exact />
                    <Route path="/" component={LoginScreen} exact />
                    <Route path="**" component={App} />



                </Switch>

            </div>
        </Router>
    )
}
