import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const { title, description, price, pictureUrl, stock } = item;
  const { addItem } = useCartContext();

  const onAdd = (cantidadSeleccionada) => {
    addItem({ item, quantity: cantidadSeleccionada });
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
            stock={stock}
            initial={1}
            setCantidadAgregada={setCantidadAgregada}
            onAdd={onAdd}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
