import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Landinganimation from "../components/landinganimation";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


class Landing extends Component {
  

    render() {
  
      return (
      
        <div>
          <div>
            <Landinganimation/>
          </div>

          {/* <div className="entrance-container">
            <NavLink style={{textDecoration: "none"}}to="/home">
              <Button variant="contained" color="primary" className={useStyles.button}>Welcome</Button>
            </NavLink>
          </div> */}

        </div>

        
      );
    }
  }
  
  export default Landing;

