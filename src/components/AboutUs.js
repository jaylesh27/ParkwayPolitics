import React from 'react';

import ron from '../../assets/images/ron-patel.jpg';
import jay from '../../assets/images/jay-patel.jpg';
import twitter_icon from '../../assets/images/twitter-icon.png';

const AboutUs = () => {

	return (
		<div className="row about-us-section">
			<h3 className="center-align">Meet the (soon-to-be) illustrious hosts</h3>
			<div className="divider"></div>
			<div className="row valign-wrapper" id="about-ron">
				<div className="col s12 m8 offset-m2 l6 offset-l3">
					<h4 className="center-align">Ronak (Ron) Patel</h4>
					<img src={ron} alt="ron patel pic" className="circle responsive-img" />
					<p>Ron is passionate about both economics and politics and because he enjoys making his own life difficult he picked those two very divisive topics in America today as his major/minor at Rutgers University where he is currently attending.  In an effort to be a more engaged citizen, he has been volunteering and being active and woke and all that good stuff.  Since his co-host Jay is making this website, Jay has taken the liberty to edit everything Ron said he wanted to include in his little blurb on the site.  To be frank, the original blurb he sent kinda sucked and was a bit preachy and self-aggrandizing.
					</p>

					<p>Follow him on twitter, he's thirsty for more followers and likes because that is how he judges his self-worth.
					</p>
					<a href="https://twitter.com/bronak21" target="_blank" id="personal-twitter-link"><img src={twitter_icon} alt="twitter icon" /></a>
				</div>
			</div>
			
			<div className="row valign-wrapper" id="about-jay">
				<div className="col s12 m8 offset-m2 l6 offset-l3">
					<h4 className="center-align">Jay Patel</h4>
					<img src={jay} alt="jay patel pic" className="circle responsive-img" />
					<p>
						Jay is best described as the human equivalent of khaki pants: unoffensive, ordinary, lacking in exceptionality in every possible way.  However, the current political climate has energized him to the point where he has begun displaying some personality and uniqueness.  A graduate of Rutgers University with degrees in finance and supply chain management, he has now shifted careers to web development.  While he improves his web developer skills and looks for a job before they all get sent to Mexico or China or (more likely) taken away by AI robots, he thought making a podcast would be a great thing to say as a filler whenever relatives and others ask him what he does.
					</p>

					<p>
						Though Jay prefers Linkedin over Twitter, follow him on Twitter.  He'll eventually tweet something some day.
					</p>
					<a href="https://twitter.com/jaylesh27" target="_blank" id="personal-twitter-link"><img src={twitter_icon} alt="twitter icon" /></a>
				</div>
			</div>

		</div>
	);
};

export default AboutUs;