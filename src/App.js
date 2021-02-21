import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn'

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme.config';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <SignIn />
        </Route>
        <Route exact path='/sign-up'>
          SignUp
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
