import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import Days from './pages/Days';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import { Notepad } from './pages/Notepad';

function App() {

	return (
		<>
			<div><Toaster/></div>
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
				<Route path="notepad" element={<Notepad />} />
				<Route path="about" element={<About />} />
				<Route path="days" element={<Days />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</>

	);
}

export default App;

