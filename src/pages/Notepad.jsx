import React from 'react';
import AddNote from '../components/AddNote';
import { Note } from '../components/Note';

export const Notepad = ({notes,addNote,removeNote}) => {

	return (
		<div className="w-full">
			<AddNote addNote={addNote}/>
			{notes.map((note) =>(<Note key={note.id} id={note.id} text={note.text} date={note.date} removeNote={removeNote}  />))}
			
		</div>
	);
};
