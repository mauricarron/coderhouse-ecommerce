import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to={`/cart`} className="d-flex order-0 order-sm-last ml-2">
      <span className="fas fa-shopping-cart text-white"></span>
    </Link>
  );
};

export default CartWidget;
