import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/images/parkway-politics-logo.jpg';


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
    padding: '0.8em'
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
					<Link to="/">Podcasts</Link>
					
				</Menu>
				<div id = "hero-section">
					<div id = "hero-overlay">
						<div id = "intro-section">
							<h1>Parkway Politics</h1>
							<img src={logo} alt="parkway politics logo" />
							<h4>Welcome to Parkway Politic's home on the web.</h4>
							<p>Well?  Go on, explore the rest of the site and listen to our content!</p>
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}