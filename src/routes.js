import React from 'react';
import { Route, IndexRoute } from 'react-router';
import TaskTable from './components/TaskTable/TaskTable';

export default (
    <Route path="/">
        <IndexRoute component={TaskTable} />
    </Route>
);