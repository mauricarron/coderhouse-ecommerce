import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <button
        className="navbar-toggler border-0 ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fas fa-bars text-white"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end ml-auto order-last"
        id="navbarResponsive"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <button
              className="btn btn-link nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              Categorías
            </button>
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item">
                Macetas
              </Link>
              <Link to="/" className="dropdown-item">
                Decoraciones
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Nosotros
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
