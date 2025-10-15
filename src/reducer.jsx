import { INITIAL_FORM_STATE } from "./state";

export const formReducer = (state, action) => {
  switch (action.type) {
    case "openNote":
      return {
        ...state,
        note: {
          ...action.payload.note,
        },
        errors: {
          errors: {
            title: false,
            text: false,
            label: false,
            date: false,
          },
        },
      };
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
    case "cleanForm":
      return {
        ...INITIAL_FORM_STATE,
      };
  }
};
