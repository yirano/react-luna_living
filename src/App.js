import React from 'react';
import Header from './components/Header/Header';
import NewItems from './components/NewItems/NewItems';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
	return (
		<main>
			<Header />
			<Hero />
			<NewItems />
		</main>
	);
}

export default App;
