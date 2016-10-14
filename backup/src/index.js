import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/myStyle.css';

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);