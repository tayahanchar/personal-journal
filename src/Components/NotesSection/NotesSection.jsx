import { Header } from "../Header";
import { NotesList } from "../NotesList";
import { NewNoteButton } from "../NewNoteButton";
import "./NotesSection.css";

const NotesSection = ({ notesList }) => {
  return (
    <section className="notes-section">
      <Header />
      <NewNoteButton />
      <NotesList notesList={notesList} />
    </section>
  );
};

export default NotesSection;
