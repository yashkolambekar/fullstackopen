import { useState } from "react";
import  axios  from "axios";

const NewNote = ({ notes, setNotes }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let noteObject = {
      content: note,
      importance: 0.5 < Math.random(),
    };
    // let tempNotes = [...notes, noteObject];
    // setNotes(tempNotes);
    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))
    })
    setNote("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default NewNote;
