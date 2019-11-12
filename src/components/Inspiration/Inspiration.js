import React from 'react';
import Aerial from '../../Images/inspiration-aerial.jpeg';
import Lights from '../../Images/inspiration-light.jpeg';
import Colorful from '../../Images/inspiration-colors.jpeg';
import './Inspiration.css';

export default function Inspiration() {
	return (
		<section className="inspiration">
			<h3>Stay Inspired!</h3>
			<div className="imgCardContainer">
				<div className="imgCard">
					<img src={Aerial} alt="View from up top" />
				</div>
				<div className="imgCard">
					<img src={Lights} alt="Hanging lights" />
				</div>
				<div className="imgCard">
					<img src={Colorful} alt="Colorful furniture" />
				</div>
			</div>
		</section>
	);
}
