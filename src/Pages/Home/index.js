import {useState, useEffect} from 'react';
import api from '../../Services/api';
import {Link} from 'react-router-dom';
import './home.css'


export default function Home(){
    const [Filmes, setFilmes] = useState([]);
    useEffect(()=>{
      async function loadFilmes(){
        const response = await api.get("r-api/?api=filmes")
        console.log(response.data);
        setFilmes(response.data);
      }
      loadFilmes();
    },[]);
    
    return (
      <div className="container">
        <div className="listaFilmes">
          {Filmes.map((filme)=>{
            return (
              <article key={filme.id}>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt={filme.nome}></img>
                <Link to={`/filme/${filme.id}`}>Visualizar</Link>
              </article>
            )
          })}
        </div>
      </div>
    )
}