import "./App.css";
import BarraDePesquisa from "./componentes/BarraPesquisa";
import Filtro from "./componentes/Filtro";
import Sidebar from "./componentes/Sidebar";
import Card from "./componentes/Card";
import Ordenacao from "./componentes/Ordenacao";
import { useEffect, useState } from "react";
const apiLink =
  "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch(apiLink)
      .then((resposta) => resposta.json())
      .then((data) => setDados(data));
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className="lista-cards">
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    imagemUrl={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    linhasDeCodigo={item.linhas_de_codigo}
                    shares={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
