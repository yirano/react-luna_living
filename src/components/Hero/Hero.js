import React from 'react';
import HeroImg from '../../Images/lounge-chair.jpeg';
import './Hero.css';

export default function Hero() {
	return (
		<section className="hero">
			<div className="heroContainer">
				<div className="heroImg">
					<img src={HeroImg} alt="Lounge chair" />
				</div>
				<h2 className="heroTitle">Lorem ipsum dolor sit</h2>
			</div>
		</section>
	);
}
