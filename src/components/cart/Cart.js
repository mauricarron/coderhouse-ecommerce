import React from "react";

import CartItems from "./CartItems";
import NoItemWarning from "./NoItemWarning";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();

  return <>{cart.length !== 0 ? <CartItems /> : <NoItemWarning />}</>;
};

export default Cart;
