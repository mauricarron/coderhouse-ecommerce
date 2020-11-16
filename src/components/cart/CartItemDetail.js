import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartItemDetail = ({ producto }) => {
  const { removeItem } = useCartContext();

  const { item, quantity } = producto;
  const { id, title, price, pictureUrl } = item;
  const itemTotalPrice = price * quantity;

  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              src={pictureUrl}
              alt={title}
              className="img-fluid d-none d-md-block rounded mb-2 shadow "
            />
          </div>
          <div className="col-md-9 text-left mt-sm-2">
            <h4>{title}</h4>
          </div>
        </div>
      </td>
      <td data-th="Price">{itemTotalPrice}</td>
      <td data-th="Quantity">{quantity}</td>
      <td className="actions" data-th="">
        <div className="text-right">
          <button
            onClick={() => {
              removeItem(id);
            }}
            className="btn btn-white border-secondary bg-white btn-md mb-2"
          >
            <span className="fas fa-trash"></span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItemDetail;
