import "./erro.css";
import { Link } from "react-router-dom";
import error from "../../assets/images/error.gif";

export default function Erro(){
    return(
        <div className="notFound">
           {/* <h1>404</h1> */}
           <img src={error} alt={"erro"}></img>
           <h2>Página não encontrada!</h2>
           <Link to='/'>Veja todos os filmes</Link>
        </div>
    )
}