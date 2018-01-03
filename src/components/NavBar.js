import React from "react";

const NavBar = (props) => {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper">
					<a href="#!" class="brand-logo">
						Parkway Politics
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
