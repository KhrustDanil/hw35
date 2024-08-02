import { useState } from 'react'
import NoteList from './NoteList';
import './App.css'
import NoteItem from './NodeItem';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNotes = (element) => {
    element.preventDefault();
   let newNote = element.target.elements.noteInput.value;
    setNotes([...notes, newNote]);
    element.target.elements.noteInput.value = '';
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  } 

  return (
    <div className="wrapper">
      <form onSubmit={addNotes}>
        <input type="text" name="noteInput" />
        <button type="submit">Add notes</button>
      </form>
      <div className="notes">
        {notes.length === 0 ? (
          <p>No notes</p>
        ) : (
          <NoteList>
            {notes.map((note, index) => (
              <NoteItem key={index} note={note} index={index} getDelete={deleteNote}></NoteItem>
            ))}
            </NoteList>
          )}
          </div>
    </div>
  );
};

export default App;