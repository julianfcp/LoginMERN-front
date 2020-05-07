import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="container p-4">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <PrivateRoute path="/" exact component={Home}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;