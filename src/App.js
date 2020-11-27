import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home greeting="Bienvenidos a MosaiCó" />
          </Route>
          <Route exact path="/categories/:categoryId">
            <Home greeting="Bienvenidos a MosaiCó" />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
