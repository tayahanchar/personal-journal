import "./NotesList.css";
import { ListNote } from "../ListNote";

export const NotesList = ({ notesList }) => {
  const sortNotes = (a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  };

  return (
    <div className="notes-list">
      {notesList.sort(sortNotes).map((note) => (
        <ListNote key={note.id} note={note} />
      ))}
    </div>
  );
};
