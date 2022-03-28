import React from "react";
import { Link } from "react-router-dom";

const Encabezado = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-uppercase" to="/">
          Rick and Morty App
        </Link>
        <Link className="navbar-brand " to="/episodios">Episodios</Link>
        <Link className="navbar-brand " to="/" >Personajes</Link>
      </div>
    </nav>
  );
};

export default Encabezado;