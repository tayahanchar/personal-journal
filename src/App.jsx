import { useState } from "react";

import "./App.css";
import NotesSection from "./Components/NotesSection/NotesSection";
import Note from "./Components/Note/Note";

function App() {
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
      <NotesSection></NotesSection>
      <Note note={note} changeNote={changeNote}></Note>
    </>
  );
}

export default App;
