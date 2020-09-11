import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { UnidadScreen } from '../components/UnidadScreen/UnidadScreen';
import { UsuarioScreen } from '../components/UsuarioScreen/UsuarioScreen';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    console.log("-----------------------------------------------AppRouter");

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    /*  const isLoggedIn = true; */
    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute
                        path="/auth"
                        component={UnidadScreen}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={UsuarioScreen}
                    />




                </Switch>
            </div>
        </Router>
    )
}