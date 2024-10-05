import'../css/NoteBox.css';

export default function NoteBox({note}) {
  return (
    <div className="noteBox-container">
      <h1>{note.title}</h1>
      <p>{note.text}</p>
    </div>
  );
}
