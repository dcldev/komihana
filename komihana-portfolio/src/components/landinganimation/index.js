import React, { Component } from "react";
import anime from "animejs";
import { NavLink } from "react-router-dom";
import { makeStyles, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './style.css'

// const useStyles = makeStyles(theme => ({
 
//   button: {
//     margin: theme.spacing(1),
    
//   },
//   input: {
//     display: 'none',
//   },
// }));

const EntranceButton = styled(Button)({
  height: 48,
  padding: '0 8px'
});


export default class Landinganimation extends Component {

    componentDidMount() {
        this.anime();
      }
    
      componentDidUpdate() {
        this.anime();
      }

    anime = () => {

    const wrapperEl = document.querySelector('.spinner');
    const numberOfEls = 90;
    const duration = 6000;
    const delay = duration / numberOfEls;

    let tl = anime.timeline({
      duration: delay,
      complete: function() { tl.restart(); }
    });

    function createEl(i) {
      let el = document.createElement('div');
      const rotate = (360 / numberOfEls) * i;
      const translateY = -50;
      const hue = Math.round(360 / numberOfEls * i);
      el.classList.add('el');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
      el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
      tl.add({
        begin: function() {
          anime({
            targets: el,
            backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
            rotate: [rotate + 'deg', rotate + 10 +'deg'],
            translateY: [translateY + '%', translateY + 10 + '%'],
            scale: [1, 1.25],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: duration * .1
          });
        }
      });
      wrapperEl.appendChild(el);
    };

    for (let i = 0; i < numberOfEls; i++) createEl(i);
    }

    render() {
        return (
          <div className="grid-container">
            <header className="landingLogo">
              <div>  
                <h1>KOMIHANA | Daniel Lee</h1>
                <h5>Commissioned Fullstack Developer</h5>
              </div>
            </header>
            <div className="grid-container">
              <div className="spinner"></div>
            </div>
            <div className="entrance-container">
              <NavLink style={{textDecoration: "none"}}to="/home">
                <EntranceButton style={{color:'white', font:'Lemon/Milk Regular'}}>Welcome</EntranceButton>
              </NavLink>
            </div>
          </div>
      
        );
    }
}