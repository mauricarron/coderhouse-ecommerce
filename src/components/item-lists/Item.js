import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { title, id, price, pictureUrl } = item;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card mb-4">
        <Link to={`/item/${id}`}>
          <img
            src={`%PUBLIC_URL%/img/${pictureUrl}`}
            className="card-img-top"
            alt={title}
          />
        </Link>
        <div className="card-body d-flex justify-content-between">
          <Link to={`/item/${id}`}>
            <h3 className="card-text text-dark">{title}</h3>
          </Link>
          <p className="lead">
            <b>${price}</b>
          </p>
        </div>
        <Link to={`/item/${id}`} className="btn btn-light btn-block">
          Ver Más
        </Link>
      </div>
    </div>
  );
};

export default Item;
