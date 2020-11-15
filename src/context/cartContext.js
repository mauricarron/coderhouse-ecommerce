import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    let sameItem = cart.find((same) => same.item.id === item.item.id);

    if (!sameItem) {
      setCart([...cart, item]);
    } else {
      const updatedItem = {
        ...sameItem,
        quantity: sameItem.quantity + item.quantity,
      };

      let index = cart.indexOf(item.id);
      cart.splice(index, 1, updatedItem);

      setCart([...cart]);
    }
  }

  function removeItem(itemId) {
    setCart([...cart.filter((cartItem) => cartItem.item.itemId !== itemId)]);
  }

  function clear() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}
