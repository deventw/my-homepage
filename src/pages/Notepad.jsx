import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import AddNote from '../components/AddNote';
import { Note } from '../components/Note';

export const Notepad = () => {

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
		setNotes([newNote,...notes]);
	};
	const removeNote = (id) => {
		setNotes(notes.filter((note)=>note.id !== id));
	};

	return (
		<div className="w-full">
			<AddNote addNote={addNote}/>
			{notes.map((note) =>(<Note key={note.id} id={note.id} text={note.text} date={note.date} removeNote={removeNote}  />))}
			
		</div>
	);
};
