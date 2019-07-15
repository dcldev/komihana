import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import './App.css';
import Landing from './pages/landing'
// import Home from './pages/home'


class App extends Component {

render () {
  return (

  <div>
      <Router>
          <Switch>
            
            <Route exact path="/" component={Landing} />
            {/* <Route path="/home" component={Home} /> */}

    
          </Switch>

          {/* <Landing/> */}

          {/* <NavLink>
            <h1 >Click to Enter</h1>
          </NavLink> */}
      
      </Router>

      

  </div>

    );
  }
}

export default App;
