import React from 'react';
import ColorfulChair from '../../Images/colorful-chairs.jpeg';
import FloralWallpaper from '../../Images/floral-wallpaper.jpeg';
import './NewItems.css';

export default function NewItems() {
	return (
		<section className="newItems">
			<div className="newLeftWrapper">
				<img src={ColorfulChair} alt="Colorful Chairs" />
				<h3>Lorem Ipsum dolor sit</h3>
			</div>
			<div className="newRightWrapper">
				<img src={FloralWallpaper} alt="Floral Wallpaper" />
			</div>
		</section>
	);
}
