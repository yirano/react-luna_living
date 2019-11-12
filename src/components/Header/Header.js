import React, { Component } from 'react';
import Search from '../../icons/search.svg';
import Heart from '../../icons/favorites.svg';
import Shopping from '../../icons/shopping-cart.svg';
import './Header.css';

export class Header extends Component {
	constructor() {
		super();
		this.state = {
			active: false
		};
	}

	handleNav = () => {
		console.log('connected');
		this.setState((prevState) => {
			return (prevState.active = !prevState.active);
		});
	};
	render() {
		return (
			<header>
				<button onClick={this.handleNav} className="hamburgerMenu">
					<span />
					<span />
					<span />
				</button>
				<div className="headerTop">
					<div className="leftIcon">
						<a href="/">
							<img className="search" src={Search} alt="Search" />
						</a>
					</div>
					<div className="rightIcon">
						<ul>
							<li>
								<a href="/">
									<img src={Heart} alt="Liked Items" />
								</a>
							</li>
							<li>
								<a href="/">
									<img src={Shopping} alt="Shopping Cart" />
								</a>
							</li>
							<li>
								<a href="/">Sign In</a>
							</li>
						</ul>
					</div>
				</div>
				<h1>Luna Living</h1>

				<nav className={this.state.active ? 'showNav' : null}>
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
						{this.state.active ? (
							<ul className="responsiveMenuIcons">
								<li>
									<a href="/">
										<img src={Heart} alt="Liked Items" />
									</a>
								</li>
								<li>
									<a href="/">
										<img src={Shopping} alt="Shopping Cart" />
									</a>
								</li>
							</ul>
						) : null}
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
