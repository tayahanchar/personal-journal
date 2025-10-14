import { v4 as uuidv4 } from "uuid";

import "./App.css";
import NotesSection from "./Components/NotesSection/NotesSection";
import Note from "./Components/Note/Note";
import useLocalStorage from "./hooks/localStorage";

function App() {
  const [notesList, setNotesList] = useLocalStorage("notes");

  const addNote = (newNote) => {
    const noteWithId = {
      ...newNote,
      id: uuidv4(),
    };

    setNotesList([...notesList, noteWithId]);
  };

  return (
    <>
      <NotesSection notesList={notesList}></NotesSection>
      <Note addNote={addNote}></Note>
    </>
  );
}

export default App;
