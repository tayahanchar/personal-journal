import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import NotesSection from "./Components/NotesSection/NotesSection";
import Note from "./Components/Note/Note";

function App() {
  const [notesList, setNotesList] = useState([]);

  const addNote = (newNote) => {
    const noteWithId = {
      ...newNote,
      id: uuidv4(),
    };

    setNotesList((prev) => [...prev, noteWithId]);
  };

  const [note, setNote] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    label: "",
    text: "",
    id: "",
  });

  const changeNote = (event) => {
    setNote((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const notesFromLocalStorage = localStorage.getItem("notes");
    if (notesFromLocalStorage) {
      setNotesList(JSON.parse(notesFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (notesList.length) {
      localStorage.setItem("notes", JSON.stringify(notesList));
    }
  }, [notesList]);

  return (
    <>
      <NotesSection notesList={notesList}></NotesSection>
      <Note addNote={addNote} note={note} changeNote={changeNote}></Note>
    </>
  );
}

export default App;
