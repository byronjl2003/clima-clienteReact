import { BrowserRouter as Router } from 'react-router-dom';
import "core-js/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LoginScreen } from './components/LoginScreen/LoginScreen';
import { AuthRouter } from './routers/AuthRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(

    <Provider store={store}>
        <AuthRouter></AuthRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();