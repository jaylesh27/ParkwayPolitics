import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage';
import PodcastList from './PodcastList';
import PodcastDetail from './PodcastDetail';
import AboutUs from './AboutUs';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path='/episodes/:id' component={PodcastDetail}/>
					<Route path='/episodes' component={PodcastList} />
					<Route path='/about-us' component={AboutUs} />
					<Route path='/' component={LandingPage} />
				</div>
			</BrowserRouter>
		);
	}
}