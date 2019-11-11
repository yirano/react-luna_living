import React from 'react';
import Aerial from '../../Images/inspiration-aerial.jpeg';
import Lights from '../../Images/inspiration-light.jpeg';
import Colorful from '../../Images/inspiration-colors.jpeg';
import './Inspiration.css';

export default function Inspiration() {
	return (
		<section className="inspiration">
			<h3>Stay Inspired!</h3>
			<div className="inspirationImgWrapper">
				<img src={Aerial} alt="View from up top" />
				<img src={Lights} alt="Hanging lights" />
				<img src={Colorful} alt="Colorful furniture" />
			</div>
		</section>
	);
}
