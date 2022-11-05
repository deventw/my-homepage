import React, { useState } from 'react';

const AddNote = ({addNote}) => {
	const [noteText,setNoteText] = useState('');
	const charLimit=5000;
	const onChange =(event)=> {
		if (noteText.length<charLimit){setNoteText(event.target.value);}

	};
	const onSave = () => {
		if(noteText.trim().length>0){
			addNote(noteText);
			setNoteText('');
		}else{alert('Nothing to save. ૮ ˶ᵔ ᵕ ᵔ˶ ა \n\n(づ˶•༝•˶) づ♡');}
	};
 
	return (
		<div className="w-80 md:w-96">
			<label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900">Jot Notes</label>

			<textarea id="new-note" rows="5" 
				className="block p-4 w-full shadow-sm text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-4  focus:outline-none focus:ring-pink-500 focus:border-pink-500 placeholder:italic " 
				placeholder="Type your notes..."
				value={noteText}
				
				onChange={onChange}></textarea>
			<div className="note-footer flex flex-row justify-between p-2">
				<small>{noteText.length}</small>

				<div className="flex gap-4">
					<button onClick={()=>setNoteText('')} className="bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>

					</button>

					<button onClick={onSave} className="bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
					</svg>
					</button>

				</div>
				
			</div>
		</div>
	);
};

export default AddNote;