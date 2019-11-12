import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import NewItems from './components/NewItems/NewItems';
import Inspiration from './components/Inspiration/Inspiration';
import Deals from './components/Deals/Deals';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<div className="container">
			<main>
				<Header />
				<Hero />
				<NewItems />
				<Inspiration />
				<Deals />
			</main>
			<Footer />
		</div>
	);
}

export default App;
