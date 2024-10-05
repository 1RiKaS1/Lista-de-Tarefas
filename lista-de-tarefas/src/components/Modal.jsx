import React, { useState } from "react";
import "../css/Modal.css";

export default function Modal({ closeModal, addNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      addNote({
        key: Date.now(),
        title,
        text,
        isCompleted: false,
      });
      closeModal(); // Fechar o modal após adicionar a nota
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Adicionar Nova Nota</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Adicionar</button>
          <button type="button" onClick={closeModal}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}