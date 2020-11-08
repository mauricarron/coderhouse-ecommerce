import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const { title, description, price, pictureUrl } = item;

  const onAdd = (cantidadSeleccionada) => {
    console.log(`Se agregaron ${cantidadSeleccionada} item/s.`);
  };

  return (
    <div className="container row mt-5 pt-4">
      <div className="col-12 col-md-6">
        <img src={pictureUrl} alt={title} className="img-fluid" />
      </div>
      <div className="col-12 col-md-6">
        <h2 className="pt-2">{title}</h2>
        <p>{description}</p>
        <p className="lead">${price}</p>
        {cantidadAgregada ? (
          <Link to="/cart" className="btn btn-light btn-block">
            Terminar Compra
          </Link>
        ) : (
          <ItemCount
            stock={10}
            initial={1}
            onAdd={onAdd}
            setCantidadAgregada={setCantidadAgregada}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
