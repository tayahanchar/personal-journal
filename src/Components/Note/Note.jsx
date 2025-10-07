import "./Note.css";
import { Input } from "../Input";
import { useState } from "react";

const Note = ({ note, changeNote, addNote }) => {
  const [formErrors, setFormErrors] = useState({
    title: false,
    text: false,
    label: false,
  });

  const fieldValidation = (fieldValue, field) => {
    if (!fieldValue.trim().length) {
      setFormErrors((prev) => ({ ...prev, [field]: true }));
    } else {
      setFormErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const formValidation = () => {
    fieldValidation(note.title, "title");
    fieldValidation(note.label, "label");
    fieldValidation(note.text, "text");

    if (!note.title || !note.label || !note.text) return false;

    return true;
  };

  const submitForm = (event) => {
    event.preventDefault();
    const isFormValid = formValidation();

    if (isFormValid) {
      addNote(note);
    }
  };

  return (
    <form className="note-section" onSubmit={submitForm}>
      <div className="note-title">
        <img className="svg" src="/title.svg" alt="title" />
        <p>Title</p>
        <Input
          type="text"
          name="title"
          style={formErrors.title ? "form-input error" : "form-input"}
          value={note.title}
          onChange={changeNote}
        />
      </div>

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
          style={formErrors.label ? "form-input error" : "form-input"}
          onChange={changeNote}
        />
      </div>
      <textarea
        className={formErrors.text ? "text error" : "text"}
        name="text"
        value={note.text}
        onChange={changeNote}
      ></textarea>
      <div className="buttons">
        <button type="submit" className="save-button">
          Save
          <img className="svg" src="/save.svg" alt="save" />
        </button>
        <button type="reset" className="delete-button">
          Delete
          <img className="svg" src="/delete.svg" alt="delete" />
        </button>
      </div>
    </form>
  );
};

export default Note;
