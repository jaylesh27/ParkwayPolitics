import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import logo from '../../assets/images/parkway-politics-logo.jpg';
import soundcloud_icon from '../../assets/images/soundcloud-icon.png';
import twitter_icon from '../../assets/images/twitter-icon.png';
import facebook_icon from '../../assets/images/facebook-icon.png';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    background: '#373a47'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default class LandingPage extends Component {


	showSettings(event) {
		event.preventDefault();
	}


	render() {
		return(
			<div>
				<Menu styles={ styles }>
					<Link to="/">About us</Link>
					<Link to="/">Episodes</Link>
					<a href="https://twitter.com/ParkwayPolitics" target="_blank"><img src={twitter_icon} alt="twitter icon" /></a>
					<a href="https://facebook.com" target="_blank"><img src={facebook_icon} alt="facebook icon" /></a>
					<a href="https://soundcloud.com/parkwaypolitics" target="_blank"><img src={soundcloud_icon} alt="soundcloud icon" /></a>
					
				</Menu>
				<div id = "hero-section">
					<div id = "hero-overlay">
						<div id = "intro-section">
							<h1>Parkway Politics</h1>
							<img src={logo} alt="parkway politics logo" />
							<h4>Welcome to Parkway Politic's home on the web</h4>
							{/*<h5>Well?  Go on, explore the rest of the site and listen to our episodes!  Binge-listening podcsts > binge-watching Netflix</h5>*/}
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}