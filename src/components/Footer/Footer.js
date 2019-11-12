import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<footer>
			<div className="firstFooter">
				<h4>About Us</h4>
				<ul>
					<li>
						<a href="/">Careers</a>
					</li>
					<li>
						<a href="/">Loyalty Program</a>
					</li>
					<li>
						<a href="/">Gift Cards</a>
					</li>
					<li>
						<a href="/">Investor Relations</a>
					</li>
				</ul>
			</div>
			<div className="secondFooter">
				<h4>Customer Service</h4>
				<ul>
					<li>
						<a href="/">My Orders</a>
					</li>
					<li>
						<a href="/">My Account</a>
					</li>
					<li>
						<a href="/">Help Center</a>
					</li>
					<li>
						<a href="/">Report a Bug</a>
					</li>
				</ul>
			</div>
			<div className="thirdFooter">
				<h4>Contact Us</h4>
				<ul>
					<li>1-800-434-1234</li>
					<li>Mon - Fri: 8am - 8pm</li>
					<li>Saturday: 12pm - 8pm</li>
					<li>Sunday: 12pm - 6pm</li>
				</ul>
			</div>
		</footer>
	);
}
