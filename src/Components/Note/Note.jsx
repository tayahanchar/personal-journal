import './Note.css'

const Note = () => {
  return (
    <section className='note-section'>
      <h2 className='note-title'>title</h2>
      <div className='note-date'>
        <img className='svg' src="/calender.svg" alt="calender" />
        <p>Date</p>
        <p>22.09.2025</p>
      </div>
      <div className='note-label'>
        <img className='svg' src="/label.svg" alt="label" />
        <p>Label</p>
        <p>Sport</p>
      </div>
      <textarea className='text'>description</textarea>
      <div className='buttons'>
        <button className='save-button'>Save
          <img className='svg' src="/save.svg" alt="save" />
        </button>
        <button className='delete-button'>Delete
          <img className='svg' src="/delete.svg" alt="delete" />
        </button>
      </div>
    </section>
  )
}

export default Note;