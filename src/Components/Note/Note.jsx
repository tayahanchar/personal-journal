import './Note.css'

const Note = () => {
  return (
    <section className='note-section'>
      <h2 className='note-title'>title</h2>
      <div className='note-date'>
        <p>Date</p>
        <p>22.09.2025</p>
      </div>
      <div className='note-label'>
        <p>Label</p>
        <p>Sport</p>
      </div>
      <textarea className='text'>description</textarea>
      <div className='buttons'>
        <button className='save-button'>Save</button>
        <button className='delete-button'>Delete</button>
      </div>
    </section>
  )
}

export default Note;