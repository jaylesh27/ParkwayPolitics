import React, { Component } from "react";

import NavBar from './NavBar';

export default class LandingPage extends Component {
	render() {
		return(
			<div>
				<NavBar />
				<h1>Hello New Jersey</h1>
			</div>
		);
	}
}