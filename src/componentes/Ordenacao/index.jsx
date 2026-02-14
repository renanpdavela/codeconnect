import { useState } from "react";
import "./styles.css";

function Item({ children }) {
  const [ativo, setAtivo] = useState(false);
  return (
    <li>
      <button
        type="button"
        className={ativo ? "item__button ativo" : "item__button"}
        onClick={() => setAtivo(!ativo)}
      >
        {children}
      </button>
    </li>
  );
}

export default function Ordenacao() {
  return (
    <div className="ordenacao">
      <ul className="ordenacao__itens">
        <Item>+ recentes</Item>
        <Item>+ compartilhamentos</Item>
        <Item>+ comentários</Item>
        <Item>a-z</Item>
        <Item>z-a</Item>
      </ul>
    </div>
  );
}
