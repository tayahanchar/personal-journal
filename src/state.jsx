export const INITIAL_FORM_STATE = {
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
