import React from 'react';
import HeroImg from '../../Images/lounge-chair.jpeg';
import './Hero.css';

export default function Hero() {
	return (
		<section className="hero">
			<h2 className="heroTitle">Lorem ipsum dolor sit</h2>
			<img src={HeroImg} alt="Lounge chair" />
		</section>
	);
}
