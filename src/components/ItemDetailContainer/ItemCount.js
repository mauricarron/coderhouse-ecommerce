import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, setAddedQuantity }) => {
  const [amount, setAmount] = useState(initial);
  const [remainingStock] = useState(stock);

  const increase = () => {
    if (remainingStock > amount) {
      setAmount(amount + 1);
    }
  };

  const decrease = () => {
    if (amount > initial) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="item-counter">
      <div
        className="counter d-flex justify-content-between align-middle"
        style={{ height: "2.5rem" }}
      >
        <button className="btn btn-light rounded-0" onClick={decrease}>
          <span className="fas fa-minus"></span>
        </button>

        <p className="lead text-center">
          <b>{amount}</b>
        </p>

        <button className="btn btn-light rounded-0" onClick={increase}>
          <span className="fas fa-plus"></span>
        </button>
      </div>
      <div className="btn-add">
        <button
          className="btn btn-light btn-block rounded-0 my-2"
          onClick={() => {
            onAdd(amount);
            setAddedQuantity(amount);
          }}
        >
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
