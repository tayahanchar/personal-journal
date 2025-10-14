import { useState, useEffect } from "react";

const useLocalStorage = (key) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesFromLocalStorage = localStorage.getItem(key);
    if (notesFromLocalStorage) {
      setNotes(JSON.parse(notesFromLocalStorage));
    }
  }, []);

  const changeNotes = (data) => {
    setNotes(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return [notes, changeNotes];
};

export default useLocalStorage;
