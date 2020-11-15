import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home";
import ItemDetailContainer from "./components/item-details/ItemDetailContainer";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home greeting="Bienvenidos a MosaiCó" />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
