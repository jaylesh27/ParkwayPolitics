import React, { Component } from 'react';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route path='/about-us' component={AboutUs}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}