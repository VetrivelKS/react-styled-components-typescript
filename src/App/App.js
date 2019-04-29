import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import { PageOne } from '../views/PageOne'
import { PageTwo } from '../views/PageTwo'

// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <h1> Header </h1>
        <Link to="/">home</Link>
        <br />
        <Link to="/pagetwo">Page two</Link>
        <Switch>
          <Route exact path="/" component={ PageOne } />
          <Route exact path="/pagetwo" component={ PageTwo } />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App