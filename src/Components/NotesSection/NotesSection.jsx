import './NotesSection.css';

const NotesSection = () => {
  return (
    <section className='notes-section'>
      <h1 className='notes-section_title'>Personal Journal</h1>
      <button className='new-note-button'>+ New note</button>
      <div className='notes-list'>
        <div className='notes-section_note'>
          <p className='note-title'>note 1</p>
          <div className='note-description'>
            <span className='note-date'>30.05.2025</span>
            <p className='note-text'>djvldjnl ffff ddgd.    gb.   db  ksnjdlj.   ddd vnsdddd ldk alksjnl.   e.  eee ssdvsdf sdvdfdgs dfgdrgdr ersfrfgrd dvdrfvdrg dfgdrgdrg ss cskd fff jn skjndlcn</p>
          </div>
        </div>
        <div className='notes-section_note'>
          <p className='note-title'>note 1</p>
          <div className='note-description'>
            <span className='note-date'>30.05.2025</span>
            <p className='note-text'>djvldjnl ffff ddgd.    gb.   db  ksnjdlj.   ddd vnsdddd ldk alksjnl.   e.  eee ssdvsdf sdvdfdgs dfgdrgdr ersfrfgrd dvdrfvdrg dfgdrgdrg ss cskd fff jn skjndlcn</p>
          </div>
        </div>
        <div className='notes-section_note'>
          <p className='note-title'>note 1</p>
          <div className='note-description'>
            <span className='note-date'>30.05.2025</span>
            <p className='note-text'>djvldjnl ffff ddgd.    gb.   db  ksnjdlj.   ddd vnsdddd ldk alksjnl.   e.  eee ssdvsdf sdvdfdgs dfgdrgdr ersfrfgrd dvdrfvdrg dfgdrgdrg ss cskd fff jn skjndlcn</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotesSection;