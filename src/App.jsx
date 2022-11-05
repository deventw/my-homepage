import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import Home from './pages/Home';
import { Notepad } from './pages/Notepad';

function App() {

	return (
		<>
			<nav>
				<ul className="flex-row flex gap-4 m-8 justify-center">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/notepad">Notepad</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>

			</nav>
			<></>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notepad" element={<Notepad />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>

	);
}

export default App;

