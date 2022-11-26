import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import AddNote from '../components/AddNote';
import { Note } from '../components/Note';
import ConeImage from '../assets/cone.png'; 
import { toast } from 'react-hot-toast';

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
		toast.success('Saved');
		
	};

	const removeNote = (id) => {
		setNotes(notes.filter((note)=>note.id !== id));
		toast.error('Note Deleted.');
	};

	return (
		<div className="w-full">
			<AddNote addNote={addNote}/>
			{notes.map((note) =>(<Note key={note.id} id={note.id} text={note.text} date={note.date} removeNote={removeNote}  />))}
			<div className="flex justify-evenly "> 
				<img src={ConeImage} width={'64'} /> 
				<img src={ConeImage} width={'64'} /> 
				<img src={ConeImage} width={'64'} /> 
			</div>

		</div>
	);
};
