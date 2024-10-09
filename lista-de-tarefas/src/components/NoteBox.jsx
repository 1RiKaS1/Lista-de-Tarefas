import React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";

import "../css/NoteBox.css";

export default function NoteBox({ note, deleteNote }) {
  return (
    <div className="noteBox-container">
      <section className="noteBox-Text">
        <h1>{note.title}</h1>
        <p>{note.text}</p>
      </section>

      <div className="checkBox">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={note.isCompleted}
              sx={{
                color: "var(--caribbean-green)",
                "&.Mui-checked": {
                  color: "var(--caribbean-green)",
                },
              }}
            />
          }
        />
        <DeleteIcon
          onClick={() => deleteNote(note.key)}
          className="deleteIcon"
          sx={{
            color: "var(--caribbean-green)",
            fontSize: 40,
          }}
        />
      </div>
    </div>
  );
}
