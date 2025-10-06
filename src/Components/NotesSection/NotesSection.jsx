import { Header } from "../Header";
import { NotesList } from "../NotesList";
import { NewNoteButton } from "../NewNoteButton";
import "./NotesSection.css";

const NotesSection = ({ notesList }) => {
  return (
    <section className="notes-section">
      <Header />
      <NewNoteButton />
      {notesList.length !== 0 ? (
        <NotesList notesList={notesList} />
      ) : (
        <div className="start-message">Create your first note</div>
      )}
    </section>
  );
};

export default NotesSection;
