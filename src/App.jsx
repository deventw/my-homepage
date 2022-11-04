import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import Home from './pages/Home';

function App() {
	return (
		<>
			<nav>
				<ul className="flex-row flex gap-4 m-4 justify-center">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>

			</nav>
			<></>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>


	);
}

export default App;


