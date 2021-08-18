import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./favoritos.css";

import { toast } from "react-toastify";

export default function Favoritos() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso");
  }

  return (
    <div id="meus-filmes">
        
      <h1>Filmes Favoritos</h1>

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <div className="item">
              <span>{item.nome}</span>

              <div className='botoes'>
                <Link id='link' to={`/filme/${item.id}`}>Ir para filme</Link>
                <button onClick={() => handleDelete(item.id)}>Remover</button>
              </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}