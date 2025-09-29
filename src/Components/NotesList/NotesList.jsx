import './NotesList.css';
import { ListNote } from '../ListNote';

export const NotesList = () => {
  return (
    <div className='notes-list'>
      <ListNote />
      <ListNote />
      <ListNote />
      <ListNote />
    </div>
  )
}