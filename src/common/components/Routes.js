import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginPage from '../../example/page';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={LoginPage}/>
    </Route>
);
