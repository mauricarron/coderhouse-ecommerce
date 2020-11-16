import React from "react";
import { Link } from "react-router-dom";

const NoItemWarning = () => {
  return (
    <div>
      <h2 className="text-center">No tienes items en el carrito</h2>
      <Link to="/">
        <span className="fas fa-arrow-left mr-2 text-success text-center"></span>
        Seguir Comprando
      </Link>
    </div>
  );
};

export default NoItemWarning;
