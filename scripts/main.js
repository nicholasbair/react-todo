
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

// Components
import App from './components/App';
import List from './components/List';
import NotFound from './components/NotFound';

// Routes

let routes = (
  <Router history={createHistory()}>
    <Route path="/" component={List}/>
    <Route path="/list/:listId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

ReactDOM.render(routes, document.getElementById('main'));
