import './filme.css';
import api from '../../Services/api';
import {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Filme(){
    const {id} = useParams();

    const [filmes, setFilmes] = useState([]);

    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(()=>{
        async function loadFilmes() {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0){
                history.replace('/');
                return;
            }

            console.log(response.data)
            setFilmes(response.data)
            setLoading(false);
        }
        loadFilmes();
    },[id, history]);

    function salvarFilme(){
        //alert("algo")
        const minhaLista = localStorage.getItem("filmes");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filmes.id)

        if (hasFilmes){
            toast.error("você já possui esse filme salvo");
            return;
        }
        filmesSalvos.push(filmes);
        localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso.")
    };

    if (loading){
        return(
            <div  className="filme-info">
                <h1>Carregando informações do filme...</h1>
            </div>
        );
    }
    return (
            <div className="filme-info"> 
            <h1>{filmes.nome}</h1>
            <img src={filmes.foto} alt={filmes.nome} />

            <h3>Sinopse</h3>
            {filmes.sinopse}
        
        <div className="filme-info"> 
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target="_blank" href={`https://youtube.com/results?search_query=${filmes.nome} trailer`}>Trailer</a>
            </button>
        </div>
       </div> 
    )
};