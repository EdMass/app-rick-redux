import React from "react";

const Encabezado = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          Rick and Morty App
        </a>
        <a className="navbar-brand " href="#">Episodios</a>
        <a className="navbar-brand " href="#">Localizaciones</a>
        <a className="navbar-brand " href="#">Favoritos</a>
      </div>
    </nav>
  );
};

export default Encabezado;