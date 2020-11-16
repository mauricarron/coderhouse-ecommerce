import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <Link to={`/cart`} className="d-flex order-0 order-sm-last ml-2">
      <span className="fas fa-shopping-cart text-white">
        <span class="ml-2 badge badge-success">{cart.length}</span>
      </span>
    </Link>
  );
};

export default CartWidget;
