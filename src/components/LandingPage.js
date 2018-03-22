import React, { Component } from "react";
import AboutUs from './AboutUs';
import TrendingNews from './TrendingNews';
import logo from '../../assets/images/parkway-politics-logo.jpg';
import soundcloud_icon from '../../assets/images/soundcloud-icon.png';
import twitter_icon from '../../assets/images/twitter-icon.png';
import facebook_icon from '../../assets/images/facebook-icon.png';

export default class LandingPage extends Component {

	render() {
		return(
			<div>
				<div id="hero-section">
					<div id="hero-overlay">
						<div id="intro-section">
							<h3>Welcome to Parkway Politics' home on the web</h3>
							<img src={logo} alt="Parkway Politics logo" />
							<h5>On this podcast, we talk about the news and issues affecting New Jersey</h5>
							<h5>Check us out here:</h5>
							<span id="social-media-links">
								<a href="https://twitter.com/ParkwayPolitics" target="_blank"><img src={twitter_icon} alt="twitter icon" /></a>
								{/* <a href="https://facebook.com" target="_blank"><img src={facebook_icon} alt="facebook icon" /></a> */}
								<a href="https://soundcloud.com/parkwaypolitics" target="_blank"><img src={soundcloud_icon} alt="soundcloud icon" /></a>
							</span>
						</div>
					</div>
				</div>
				<div className="row podcast-info">
					<div className="col s12 m6" id="fake-news-blurb">
						<h3>So much fake news, so little time.</h3>
						<p>But we do hope you'll make time for us.  Our podcast is dedicated to bringing New Jersey residents the news they need to stay informed in our current ten-news-cycles-a-day maelstrom.  Stick with us as we dig deep into what's happening in New Jersey and occasionally comment on what's happening at the national level because there's certainly a lot of crazy to dissect up there.</p>
					</div>
					<div className="col s12 m6" id="latest-episode">
						<h3>Listen to our latest episode</h3>
						
						<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/417340296&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

					</div>
				</div>
				{/* <TrendingNews /> */}
				<AboutUs />
			</div>
		);
	}
}