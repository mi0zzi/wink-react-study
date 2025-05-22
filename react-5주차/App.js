import React, { useState } from 'react';
import { NoteInput, NoteItem } from './components/Note';
import './App.scss';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) =>
    setNotes([...notes, { id: Date.now(), title, content }]);

  return (
    <div className="app">
      <h1>🍀메모장🍀</h1>
      <NoteInput onAdd={addNote} />
      {notes.map(({ id, title, content }) => (
        <NoteItem key={id} title={title} content={content} />
      ))}
    </div>
  );
}

export default App;
