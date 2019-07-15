import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import './App.css';
import Landing from './components/landing';
import Loadinganimation from './components/loadinganimation';


class App extends Component {

render () {
  return (
      <div className="grid-container">
        <div><Landing/></div>
        <div><Loadinganimation/></div>
      </div>

    );
  }
}

export default App;
