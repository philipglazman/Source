import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'

import { Switch, Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// CSS font
import '../node_modules/font-awesome/css/font-awesome.min.css';
// CSS ref
import '../node_modules/materialize-css/dist/css/materialize.css';
import 'react-transitions/dist/animations.css';

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>

      <Switch>
        <Route exact path='/' component={ Home } />
      </Switch>

    </Router>
  ,document.getElementById('root')
);