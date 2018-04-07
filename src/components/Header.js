import React from 'react';
import logo from '../../assets/images/parkway-politics-logo-2.png';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<header>
			<nav>
				<div className="row">
					<div className="nav-row">
						<Link to="/"><img src={logo} className="nav-logo" alt="parkway politics logo" /></Link>
						<ul className="main-nav">
							<li><Link to="/about-us">About us</Link></li>
							<li><Link to="/episodes">Episodes</Link></li>
							<li><a href="https://twitter.com/ParkwayPolitics" target="_blank">@ParkwayPolitics</a></li>
							<li><a href="https://soundcloud.com/parkwaypolitics" target="_blank">Soundcloud</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="header-box">
			<h1>Welcome to Parkway Politics'<br></br> home on the web</h1>
			</div>
		</header>
	);
};

export default Header;