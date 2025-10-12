import "./Note.css";
import { Input } from "../Input";
import { useReducer } from "react";

const Note = ({ addNote }) => {
  const INITIAL_FORM_STATE = {
    note: {
      title: "",
      date: new Date().toISOString().split("T")[0],
      label: "",
      text: "",
      id: "",
    },
    errors: {
      title: true,
      text: true,
      label: true,
      date: false,
    },
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "changeNote":
        return {
          ...state,
          note: {
            ...state.note,
            [action.payload.name]: action.payload.value,
          },
          errors: {
            ...state.errors,
            [action.payload.name]: action.payload.isError,
          },
        };
    }
  };

  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_FORM_STATE);

  const formValidation = () => {
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
    }
  };

  return (
    <form className="note-section" onSubmit={submitForm}>
      <div className="note-title">
        <img className="svg" src="/title.svg" alt="title" />
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          name="title"
          style={formState.errors.title ? "form-input error" : "form-input"}
          value={formState.note.title}
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
          value={formState.note.date}
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
          value={formState.note.label}
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
        className={formState.errors.text ? "text error" : "text"}
        name="text"
        value={formState.note.text}
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
