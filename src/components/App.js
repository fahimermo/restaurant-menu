import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
}
from 'react-router-dom';

import Board from '../components/Board'; 
import Regular from '../components/Regular';
import Breakfast from '../components/Breakfast';


function App(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Board} />
                <Route exact path="/regular" component={Regular} />
                <Route exact path="/breakfast" component={Breakfast} />
            </Switch>
        </Router>
    );
}

export default App;