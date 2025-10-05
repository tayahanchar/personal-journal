import { useState } from "react";

import "./App.css";
import NotesSection from "./Components/NotesSection/NotesSection";
import Note from "./Components/Note/Note";

function App() {
  const [notesList, setNotesList] = useState([]);

  const addNote = (newNote) => {
    setNotesList((prev) => [...prev, newNote]);
  };

  const [note, setNote] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    label: "",
    text: "",
  });

  const changeNote = (event) => {
    setNote((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <NotesSection notesList={notesList}></NotesSection>
      <Note addNote={addNote} note={note} changeNote={changeNote}></Note>
    </>
  );
}

export default App;
