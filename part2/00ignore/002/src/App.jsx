import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    setNotes(
      [...notes, {
        content: newNote,
    important: Math.random() < 0.5,
    id: notes.length + 1}]
    )
    setNewNote("a new note...");
  };

  const newNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={newNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
