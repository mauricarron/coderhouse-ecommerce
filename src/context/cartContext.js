import React, { useState } from "react";

const CartContext = React.createContext([]);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // addItem

  // removeItem

  // clear

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
