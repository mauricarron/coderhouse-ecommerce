import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [addedQuantity, setAddedQuantity] = useState(0);
  const { title, description, price, pictureUrl, stock } = item;
  const { addItem } = useCartContext();

  const onAdd = (amountSelected) => {
    addItem({ item, quantity: amountSelected });
  };

  return (
    <div className="container">
      <div className="row mt-5 pt-4">
        <div className="col-12 col-md-6">
          <img src={pictureUrl} alt={title} className="img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="pt-2">{title}</h2>
          <p>{description}</p>
          <p className="lead">${price}</p>
          {addedQuantity ? (
            <Link to="/cart" className="btn btn-light btn-block">
              Terminar Compra
            </Link>
          ) : (
            <ItemCount
              stock={stock}
              initial={1}
              setAddedQuantity={setAddedQuantity}
              onAdd={onAdd}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
