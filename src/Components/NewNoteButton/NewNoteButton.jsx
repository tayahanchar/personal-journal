import "./NewNoteButton.css";

export const NewNoteButton = ({ setCurrentNoteId }) => {
  return (
    <button onClick={() => setCurrentNoteId("")} className="new-note-button">
      + New note
    </button>
  );
};
