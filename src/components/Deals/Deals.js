import React from 'react';
import Dining from '../../Images/clearance-dining.jpeg';
import Chairs from '../../Images/clearance-greychairs.jpg';
import Pillows from '../../Images/clearance-pillows.jpeg';
import Modern from '../../Images/clearance-modern.jpg';
import './Deals.css';

export default function Deals() {
	return (
		<section className="deals">
			<div className="timer">
				<h3>Ends In 01:59:34</h3>
			</div>
			<div className="dealsBody">
				<h3>Flash Deals!</h3>
				<button>Shop Now!</button>

				<div className="cardContainer">
					<div className="card">
						<div className="cardImg">
							<img src={Chairs} alt="sales item" />
						</div>
						<div className="cardText">
							<h4>Lorem Ipsum</h4>
							<p>Aliquam erat volutpat. Pellentesque rhoncus porta magna eget convallis.</p>
							<h4 className="price">$799.99</h4>
							<h5>$1299.99</h5>
						</div>
					</div>
					<div className="card">
						<div className="cardImg">
							<img src={Dining} alt="sales item" />
						</div>
						<div className="cardText">
							<h4>Lorem Ipsum</h4>
							<p>Aliquam erat volutpat. Pellentesque rhoncus porta magna eget convallis.</p>
							<h4 className="price">$799.99</h4>
							<h5>$1299.99</h5>
						</div>
					</div>
					<div className="card">
						<div className="cardImg">
							<img src={Modern} alt="sales item" />
						</div>
						<div className="cardText">
							<h4>Lorem Ipsum</h4>
							<p>Aliquam erat volutpat. Pellentesque rhoncus porta magna eget convallis.</p>
							<h4 className="price">$799.99</h4>
							<h5>$1299.99</h5>
						</div>
					</div>
					<div className="card">
						<div className="cardImg">
							<img src={Pillows} alt="sales item" />
						</div>
						<div className="cardText">
							<h4>Lorem Ipsum</h4>
							<p>Aliquam erat volutpat. Pellentesque rhoncus porta magna eget convallis.</p>
							<h4 className="price">$799.99</h4>
							<h5>$1299.99</h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
