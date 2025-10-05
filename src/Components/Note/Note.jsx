import "./Note.css";
import { Input } from "../Input";

const Note = ({ note, changeNote }) => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="note-section" onSubmit={submitForm}>
      <Input
        placeholder="title"
        type="text"
        name="title"
        style="note-title"
        value={note.title}
        onChange={changeNote}
      />
      <div className="note-date">
        <img className="svg" src="/calender.svg" alt="calender" />
        <p>Date</p>
        <Input
          value={note.date}
          type="date"
          name="date"
          style="form-input"
          onChange={changeNote}
        />
      </div>
      <div className="note-label">
        <img className="svg" src="/label.svg" alt="label" />
        <p>Label</p>
        <Input
          value={note.label}
          type="text"
          name="label"
          style="form-input"
          onChange={changeNote}
        />
      </div>
      <textarea
        className="text"
        name="text"
        value={note.text}
        onChange={changeNote}
      ></textarea>
      <div className="buttons">
        <button className="save-button">
          Save
          <img className="svg" src="/save.svg" alt="save" />
        </button>
        <button className="delete-button">
          Delete
          <img className="svg" src="/delete.svg" alt="delete" />
        </button>
      </div>
    </form>
  );
};

export default Note;
