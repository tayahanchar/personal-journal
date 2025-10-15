import "./Note.css";
import { Input } from "../Input";
import { useReducer, useRef, useEffect } from "react";
import { INITIAL_FORM_STATE } from "../../state";
import { formReducer } from "../../reducer";

const Note = ({ addNote, notesList, currentNoteId, setCurrentNoteId }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_FORM_STATE);
  const titleRef = useRef();
  const labelRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    if (currentNoteId) {
      console.log("jjjj");
      dispatchForm({
        type: "openNote",
        payload: {
          note: notesList.find((note) => note.id === currentNoteId),
        },
      });
    }
  }, [currentNoteId]);

  const setFocus = (errors) => {
    switch (true) {
      case errors.title:
        titleRef.current?.focus();
        break;
      case errors.date:
        dateRef.current.focus();
        break;
      case errors.label:
        labelRef.current.focus();
        break;
      case errors.text:
        textRef.current.focus();
        break;
    }
  };

  const formValidation = () => {
    setFocus(formState.errors);

    if (
      formState.errors.title ||
      formState.errors.label ||
      formState.errors.text
    ) {
      return false;
    }

    return true;
  };

  const submitForm = (event) => {
    event.preventDefault();
    const isFormValid = formValidation();

    if (isFormValid) {
      addNote(formState.note);
      dispatchForm({ type: "cleanForm" });
      setCurrentNoteId("");
    }
  };

  return (
    <form className="note-section" onSubmit={submitForm}>
      <div className="note-title">
        <img className="svg" src="/title.svg" alt="title" />
        <label htmlFor="title">Title</label>
        <Input
          ref={titleRef}
          type="text"
          name="title"
          style={formState.errors.title ? "form-input error" : "form-input"}
          value={formState.note.title || ""}
          onChange={(event) => {
            dispatchForm({
              type: "changeNote",
              payload: {
                name: "title",
                value: event.target.value,
                isError: !event.target.value.trim(),
              },
            });
          }}
        />
      </div>
      <div className="note-date">
        <img className="svg" src="/calender.svg" alt="calender" />
        <label htmlFor="date">Date</label>
        <Input
          ref={dateRef}
          value={formState.note.date || new Date().toISOString().split("T")[0]}
          type="date"
          name="date"
          style="form-input"
          onChange={(event) => {
            dispatchForm({
              type: "changeNote",
              payload: {
                name: "date",
                value: event.target.value,
                isError: false,
              },
            });
          }}
        />
      </div>
      <div className="note-label">
        <img className="svg" src="/label.svg" alt="label" />
        <label htmlFor="label">Label</label>
        <Input
          ref={labelRef}
          value={formState.note.label || ""}
          type="text"
          name="label"
          style={formState.errors.label ? "form-input error" : "form-input"}
          onChange={(event) => {
            dispatchForm({
              type: "changeNote",
              payload: {
                name: "label",
                value: event.target.value,
                isError: !event.target.value.trim(),
              },
            });
          }}
        />
      </div>
      <textarea
        ref={textRef}
        className={formState.errors.text ? "text error" : "text"}
        name="text"
        value={formState.note.text || ""}
        onChange={(event) => {
          dispatchForm({
            type: "changeNote",
            payload: {
              name: "text",
              value: event.target.value,
              isError: !event.target.value.trim(),
            },
          });
        }}
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
