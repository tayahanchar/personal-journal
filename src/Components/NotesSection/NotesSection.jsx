import { Header } from "../Header";
import { NotesList } from "../NotesList";
import { NewNoteButton } from "../NewNoteButton";
import "./NotesSection.css";

const NotesSection = ({ notesList, setCurrentNoteId }) => {
  return (
    <section className="notes-section">
      <Header />
      <NewNoteButton />
      {notesList.length !== 0 ? (
        <NotesList setCurrentNoteId={setCurrentNoteId} notesList={notesList} />
      ) : (
        <div className="start-message">Create your first note</div>
      )}
    </section>
  );
};

export default NotesSection;
