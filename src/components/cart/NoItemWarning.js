import React from "react";
import { Link } from "react-router-dom";

const NoItemWarning = () => {
  return (
    <div className="container mt-5 pt-5 d-flex flex-column align-items-center">
      <h2 className="text-center mb-5">No tienes items en el carrito</h2>
      <Link to="/">
        <span className="fas fa-arrow-left mr-2 text-success"></span>
        Seguir Comprando
      </Link>
    </div>
  );
};

export default NoItemWarning;
