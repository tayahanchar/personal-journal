import "./ListNote.css";

export const ListNote = ({ note }) => {
  return (
    <div className="notes-section_note">
      <p className="notes-section-title">{note.title}</p>
      <div className="note-description">
        <p className="notes-date">{note.date}</p>
        <p className="note-text">{note.text}</p>
      </div>
    </div>
  );
};
