import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
// import Landinganimation from './components/landinganimation';
import Landing from "./pages/landing";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";


class App extends Component {

render () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router> 
    );
  }
}

export default App;
