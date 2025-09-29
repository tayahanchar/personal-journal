import { Header } from '../Header';
import { NotesList } from '../NotesList';
import { NewNoteButton } from '../NewNoteButton'
import './NotesSection.css';

const NotesSection = () => {
  return (
    <section className='notes-section'>
      <Header />
      <NewNoteButton />
      <NotesList />
    </section>
  )
}

export default NotesSection;