import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import Home from './pages/Home';
import { Notepad } from './pages/Notepad';

function App() {
	const [notes, setNotes] = useState([]);

	useEffect(() =>{
		const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
		if (savedNotes) {
			setNotes(savedNotes);	
		}
	},[]);
	useEffect(() =>{localStorage.setItem('react-notes-app-data',JSON.stringify(notes));},[notes]);

	const addNote = (text) => {
		const newNote = {
			id:nanoid(),
			text:text,
			date:new Date().toLocaleString()
		}; 
		setNotes([...notes,newNote]);
	};
	const removeNote = (id) => {
		setNotes(notes.filter((note)=>note.id !== id));
	};

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
				<Route path="/notepad" element={<Notepad notes={notes} addNote={addNote} removeNote={removeNote}/>} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>

	);
}

export default App;

