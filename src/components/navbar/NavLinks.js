import React from "react";

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
            <a className="nav-link" href="!#">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="!#"
            >
              Categorías
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="!#">
                Macetas
              </a>
              <a className="dropdown-item" href="!#">
                Decoraciones
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Nosotros
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
