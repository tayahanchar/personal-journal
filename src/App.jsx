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
      <Note addNote={addNote}></Note>
    </>
  );
}

export default App;
