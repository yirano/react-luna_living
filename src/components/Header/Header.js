import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
	render() {
		return (
			<header>
				<h1>Luna Living</h1>
				<nav>
					<ul>
						<li>
							<a href="/">Living Room</a>
						</li>
						<li>
							<a href="/">Bedroom</a>
						</li>
						<li>
							<a href="/">Kitchen &amp; Dining</a>
						</li>
					</ul>
				</nav>
				<div className="headerBottom">
					<p>New Items in Stock!</p>
				</div>
			</header>
		);
	}
}

export default Header;
