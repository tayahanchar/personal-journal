import "./NotesList.css";
import { ListNote } from "../ListNote";

export const NotesList = ({ notesList }) => {
  return (
    <div className="notes-list">
      {notesList.map((note) => (
        <ListNote note={note} />
      ))}
    </div>
  );
};
