import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import NewItems from './components/NewItems/NewItems';
import Inspiration from './components/Inspiration/Inspiration';
import Deals from './components/Deals/Deals';
import './App.css';

function App() {
	return (
		<main>
			<Header />
			<Hero />
			<NewItems />
			<Inspiration />
			<Deals />
		</main>
	);
}

export default App;
