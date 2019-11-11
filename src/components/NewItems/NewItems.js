import React from 'react';
import ColorfulChair from '../../Images/colorful-chairs.jpeg';
import FloralWallpaper from '../../Images/floral-wallpaper.jpeg';
import './NewItems.css';

export default function NewItems() {
	return (
		<section className="newItems">
			<div className="newLeftWrapper">
				<h3>Lorem ipsum dolor sit</h3>
				<img src={ColorfulChair} alt="Colorful Chairs" />
			</div>
			<div className="newRightWrapper">
				<img src={FloralWallpaper} alt="Floral Wallpaper" />
			</div>
		</section>
	);
}
