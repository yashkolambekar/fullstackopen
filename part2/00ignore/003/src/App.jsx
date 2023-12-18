import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import NewNote from "./components/NewNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);
  console.log("render", notes.length, "notes");

  return (
    <>
      <Note notes={notes} />
      <NewNote notes={notes} setNotes={setNotes}/>
    </>
  );
};

export default App;
