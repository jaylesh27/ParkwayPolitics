import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import TrendingNews from './TrendingNews';
import Header from './Header';
import Footer from './Footer';
import logo from '../../assets/images/parkway-politics-logo.jpg';
import soundcloud_icon from '../../assets/images/soundcloud-icon.png';
import twitter_icon from '../../assets/images/twitter-icon.png';
import facebook_icon from '../../assets/images/facebook-icon.png';
import ron from '../../assets/images/ron-patel.jpg';
import jay from '../../assets/images/jay-patel.jpg';
import brian from '../../assets/images/brian-karabinchak.png';

export default class LandingPage extends Component {

	render() {
		return(
			<div>
				<Header />
				<div className="container-fluid intro-section">
					<div className="row justify-content-center">
						<h2>So much fake news, so little time</h2>
					</div>
					<div className="row justify-content-center">
						<p className="text">But we do hope you'll make time for us. Our podcast is dedicated to bringing New Jersey residents the news they need to stay informed in our current ten-news-cycles-a-day maelstrom. Stick with us as we dig deep into what's happening in New Jersey and occasionally comment on what's happening at the national level because there's certainly a lot of crazy to dissect up there.</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 col-sm-8">
							<div className="intro-section-box">
								<div>
									<h3>Who are we?</h3>
								</div>
								<div id="about-us-blurb">
									<div className="host-images">
										<img src={ron} alt="ron" />
										<img src={jay} alt="jay" />
										<img src={brian} alt="brian" />
									</div>
									<div>
										<p className="about-us-blurb-text">
											And why are we here?  No, we're not philosophers.  We are simply three millenials who are dedicated to bringing New Jerseyans the news they need to stay informed about New Jersey politics.  Click below to find out more.
										</p>
									</div>
								</div>
								<div>
									<Link to="/about-us"><button type="button">Read more about us</button></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-8">
							<div className="latest-episode-box">
								<div>
									<h3>Latest episode</h3>
								</div>
								<div id="soundcloud-embed">
									<iframe width="90%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/436517136&color=%23913ee4&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>
								</div>
								<div>
									<Link to="/episodes"><button type="button">Previous episodes</button></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<TrendingNews />
				<Footer />
			</div>
		);
	}
}