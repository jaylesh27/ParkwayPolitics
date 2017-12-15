import React, { Component } from "react";

const NavBar = () => {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper">
					<a href="#!" class="brand-logo">
						Logo
					</a>
					<ul class="right hide-on-med-and-down">
						<li>
							<a href="sass.html">Sass</a>
						</li>
						<li>
							<a href="badges.html">Components</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
