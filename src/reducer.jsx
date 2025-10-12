import { INITIAL_FORM_STATE } from "./state";

export const formReducer = (state, action) => {
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
    case "cleanForm":
      return {
        ...INITIAL_FORM_STATE,
      };
  }
};
