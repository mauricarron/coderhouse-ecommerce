import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [stockDisponible, setStockDisponible] = useState(stock);

  const incrementar = () => {
    if (stockDisponible > cantidad) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="item-counter" style={{ width: "8rem" }}>
      <div
        className="counter d-flex justify-content-between align-middle"
        style={{ height: "2.5rem" }}
      >
        <button className="btn btn-light rounded-0" onClick={decrementar}>
          <span className="fas fa-minus"></span>
        </button>

        <p className="lead text-center">
          <b>{cantidad}</b>
        </p>

        <button className="btn btn-light rounded-0" onClick={incrementar}>
          <span className="fas fa-plus"></span>
        </button>
      </div>
      <div className="btn-add">
        <button
          className="btn btn-light btn-block rounded-0 my-2"
          onClick={() => {
            onAdd(cantidad);
          }}
        >
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
