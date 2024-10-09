import { useState } from "react";

import "../css/BoxListBackGround.css";

import NoteBox from "./NoteBox";
import AddBox from "./AddBox";
import Modal from "./Modal"; // Importar o modal

export default function BoxListBackGround() {
  const [notes, setNotes] = useState([
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteKey) => {
    setNotes(notes.filter(note => note.key !== noteKey));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <header className="card-header">
        <section className="header-section">
          <h1 className="titulo">Lista de Atividades</h1>
        </section>
      </header>

      {/* Slide bar de notas */}
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.key} >
            <NoteBox note={note} deleteNote={deleteNote} />
          </div>
        ))}
      </div>

      {/* Botão fixo para adicionar notas */}
      <AddBox openModal={openModal} />

      {isModalOpen && <Modal closeModal={closeModal} addNote={addNote} />}
    </div>
  );
}