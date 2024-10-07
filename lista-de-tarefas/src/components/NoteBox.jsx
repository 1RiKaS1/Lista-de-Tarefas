import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import '../css/NoteBox.css';

export default function NoteBox({ note }) {
  return (
    <div className="noteBox-container">
      <section>
        <h1>{note.title}</h1>
        <p>{note.text}</p>
      </section>
    
      <div className="checkBox" >
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={note.isCompleted}
              sx={{
                color: 'var(--caribbean-green)',
                '&.Mui-checked': {
                  color: 'var(--caribbean-green)',
                },
              }}
            />
          }
        />
      </div>
    </div>
  );
}