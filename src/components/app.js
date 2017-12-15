import React, { Component } from 'react';

import NavBar from './NavBar';

export default class App extends Component {
	render() {
		return(
			<div>
			<NavBar />
				<h1 className="center-align">Hello New Jersey</h1>
			</div>
		);
	}
}