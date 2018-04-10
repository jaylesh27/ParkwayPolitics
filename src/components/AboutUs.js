import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ron from '../../assets/images/ron-patel.jpg';
import jay from '../../assets/images/jay-patel.jpg';
import brian from '../../assets/images/brian-karabinchak.png';
import twitter_icon from '../../assets/images/twitter-icon.png';
import new_jersey from '../../assets/images/new-jersey-image-wikipedia.png';

const AboutUs = () => {

	return (
		<div>
			<NavBar />
			<div className="container-fluid mission-section">
				<div className="row justify-content-center">
					<h2>Why the focus on NJ news and politics?</h2>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<p className="mission-text">
							Our focus on NJ politics stems from the ignorance that the founders of this podcast, Ron and Jay, had concerning local and state news.  A lot of the legislation that affects the day-to-day lives of Americans doesn't come out of Washington D.C., it comes out of state capitals across the country.  That is why we want to dig deep into one state.
						</p>
						<p className="mission-text">
							Our goal is to look into and talk about what is happening in New Jersey: what the New Jersey state legislature is doing, what Senators and Congressman from NJ are doing in Washington, and look at the whole range of news and issues that concern New Jersey and its residents.  Since New Jersey doesn’t exist in a vacuum, we will also look at how bills passed in the U.S. Congress will affect New Jersey, and what the federal government does that will affect it as well.
						</p>
						<p className="mission-text">
							Since we are humans and have views of our own, our political views will often slip through into our discussions.  However, we will do our best to not become a complete echo chamber and we'll be sure to look at all sides of the issues.
						</p>
						<p className="mission-text">
							We hope you will join us as we make this podcast and cover issues that New Jerseyans care about.  We became very interested in politics recently but by no means are we political savants.  We will likely be learning about some of the issues as we cover them.  This will certainly be a learning experience for us as well, and we hope you come along with us on this journey.
						</p>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<img id="new-jersey-image" src={new_jersey} alt="new jersey image" />
					</div>
				</div>
			</div>
			<div className="container-fluid hosts-section">
				<div className="row justify-content-center">
					<h2>Meet the hosts</h2>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="about-host">
							<div>
								<h4>Ron Patel</h4>
							</div>
							<div>
								<img src={ron} className="host-pic" alt="ron patel pic" />
							</div>
							<div>
								<p>
									Ron is passionate about both economics and politics.  Because he enjoys making his own life difficult he picked those two very divisive topics in America today as his major/minor at Rutgers University.  In an effort to be a more engaged citizen, he has been volunteering and being active and woke and all that good stuff.  Since his co-host Jay is making this website, he has taken the liberty to edit everything Ron wanted to include in his little blurb on the site.  To be frank, the original blurb Ron sent kinda sucked (it was a bit preachy and self-aggrandizing).
								</p>
								<p>
									Follow him on twitter, he's thirsty for more followers and likes because that is how he judges his self-worth.
								</p>
								<a href="https://twitter.com/bronak21" target="_blank"><img src={twitter_icon} className="twitter-icon" alt="twitter icon" /></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="about-host">
							<div>
								<h4>Jay Patel</h4>
							</div>
							<div>
								<img src={jay} className="host-pic" alt="jay patel pic" />
							</div>
							<div>
								<p>
									Jay is a graduate of Rutgers University with degrees in finance and supply chain management though he has now shifted careers to web development.  In his free time, he pretends to be a skilled political commentator.  While he improves his web developer skills and looks for a job before they all get sent to Mexico or China or (more likely) taken away by AI robots, he thought making a podcast would be a great thing to say as a filler whenever relatives and others ask him what he does.
								</p>
								<p>
									Follow Jay on twitter.  Do not be alarmed by his lack of followers/tweets: up until the launch of this podcast, Jay used Twitter as both a news feed and spiritual self-flagellation.
								</p>
								<a href="https://twitter.com/jaylesh27" target="_blank"><img src={twitter_icon} className="twitter-icon" alt="twitter icon" /></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="about-host">
							<div>
								<h4>Brian Karabinchak</h4>
							</div>
							<div>
								<img src={brian} className="host-pic" alt="brian karabinchak pic" />
							</div>
							<div>
								<p>
									Brian is a graduate of Rutgers University in New Brunswick.  He is a former data analyst at a forensic accounting firm and an aspiring AI programmer trying to help speed up the incoming technopocalypse...or at the very least to keep Jay from gainful employment.  In the meantime he's spending his time keeping up with the political comings and goings of New Jersey politicians.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AboutUs;