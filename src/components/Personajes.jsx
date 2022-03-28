import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPersonajesAccion,
  siguenterPersonajesAccion,
} from "../redux/ricksDucks";

function Personajes() {
  const dispatch = useDispatch();

  const personajes = useSelector((store) => store.personajes.array);

  return (
    <div>
      <button onClick={() => dispatch(obtenerPersonajesAccion())}>
        Personajes
      </button>
      <button onClick={() => dispatch(siguenterPersonajesAccion())}>
        Siguiente
      </button>
      <div className="row">
        {personajes.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card" style={{ minWidth: "230px" }}>
              <img
                src={item.image}
                alt={`imagen-${item.name}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>{item.gender}</p>
                <p>Status : {item.status}</p>
                {item.type ? <p>{item.type}</p> : <p>{item.species}</p>}
                <p>Location: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personajes;
