import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const staticCategories = [
    { categoryId: "macetas", categoryName: "Macetas" },
    { categoryId: "tutores", categoryName: "Tutores" },
  ];

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
              {staticCategories.map((category) => (
                <Link
                  to={`/categories/${category.categoryId}`}
                  key={category.categoryId}
                  className="dropdown-item"
                >
                  {category.categoryName}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
