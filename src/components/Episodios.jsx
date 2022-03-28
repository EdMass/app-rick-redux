import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { anteriorEpisodioAccion, obtenerEpisodioAccion, siguenterEpisodioAccion } from "../redux/episodioDucks";

function Episodios() {
const dispatch = useDispatch();

  const episodios = useSelector((store) => store.episodios.array);

  return (
    <div className="container">
      <br />
      <nav>
        <ul className="pagination gap-2 d-md-flex justify-content-center">
          <li className="page-item">
            <button className="btn btn-dark" onClick={() => dispatch(obtenerEpisodioAccion())}>
              Episodios
            </button>
            <button className="btn btn-dark" onClick={() => dispatch(anteriorEpisodioAccion())}>
              Anterior
            </button>
            <button className="btn btn-dark" onClick={() => dispatch(siguenterEpisodioAccion())}>
              Siguiente
            </button>
          </li>
        </ul>
      </nav>

      <br />
      <div className="row">
        {episodios.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card" style={{ minWidth: "230px" }}>
              
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>{item.air_date}</p>
                <p>Episode : {item.episode}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Episodios