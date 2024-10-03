import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "../css/BoxListBackGround.css";

import NoteBox from "./NoteBox";
import AddBox from "./AddBox";

export default function BoxListBackGround() {
  return (
    <div className="card">
      <header className="card-header">
        <section className="header-section">
          <h1 className="titulo">Lista de Atividade</h1>
          <p className="horario">24/09/2024 - 12:00 pm</p>
        </section>
      </header>
      <AccountCircleIcon />
      <NoteBox />
      <AddBox />
    </div>
  );
}
