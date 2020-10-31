import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { title, description, price, pictureUrl } = item;

  const onAdd = (cantidadSeleccionada) => {
    console.log(`Se agregaron ${cantidadSeleccionada} item/s.`);
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <img src={pictureUrl} alt={title} className="img-fluid" />
      </div>
      <div className="col-12 col-md-6">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="lead">${price}</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
