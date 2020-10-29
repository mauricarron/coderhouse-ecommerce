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
    <div>
      <div className="btn-group m-2" role="group" aria-label="Agregar o Quitar">
        <button className="btn btn-link" onClick={decrementar}>
          <span className="fas fa-minus-circle"></span>
        </button>

        <p className="lead mb-0">{cantidad}</p>

        <button className="btn btn-link" onClick={incrementar}>
          <span className="fas fa-plus-circle"></span>
        </button>
      </div>

      <div className="agregar">
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            onAdd(cantidad);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
