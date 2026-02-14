import { useState } from "react";
import "./styles.css";

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState(""); // Hook do react; O valor "" dentro do useState é o valor inicial, que pode ser um array também
  return (
    <input
      className="barra-pesquisa"
      type="search"
      placeholder="Digite o que você procura"
      value={termoPesquisa} // Inicia vazio
      onChange={(evento) => setTermoPesquisa(evento.target.value)} // Altera o valor de termoPesquisa
    />
  );
}
