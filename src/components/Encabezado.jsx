import React from "react";
import { Link } from "react-router-dom";

const Encabezado = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          Rick and Morty App
        </a>
        <a className="navbar-brand " href="/episodios">Episodios</a>
        <a className="navbar-brand " href="/" >Personajes</a>
      </div>
    </nav>
  );
};

export default Encabezado;