import { v4 as uuidv4 } from "uuid";

import "./App.css";
import NotesSection from "./Components/NotesSection/NotesSection";
import Note from "./Components/Note/Note";
import useLocalStorage from "./hooks/localStorage";
import { useState } from "react";

function App() {
  const [notesList, setNotesList] = useLocalStorage("notes");
  const [currentNoteId, setCurrentNoteId] = useState("");

  const addNote = (newNote) => {
    if (notesList.find((note) => note.id === newNote.id)) {
      setNotesList(
        notesList.map((note) => (note.id === newNote.id ? newNote : note))
      );
    } else {
      const noteWithId = {
        ...newNote,
        id: uuidv4(),
      };
      setNotesList([...notesList, noteWithId]);
    }
  };

  return (
    <>
      <NotesSection
        setCurrentNoteId={setCurrentNoteId}
        notesList={notesList}
      ></NotesSection>
      <Note
        currentNoteId={currentNoteId}
        notesList={notesList}
        addNote={addNote}
        setCurrentNoteId={setCurrentNoteId}
      ></Note>
    </>
  );
}

export default App;
