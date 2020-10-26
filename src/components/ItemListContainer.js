import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ title }) => {
  const onAdd = (cantidadSeleccionada) => {
    console.log(`Se agregaron ${cantidadSeleccionada} item/s.`);
  };

  return (
    <div>
      <h3>{title}</h3>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
