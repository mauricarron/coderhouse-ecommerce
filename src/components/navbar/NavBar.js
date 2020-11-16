import React from "react";
import CartWidget from "./CartWidget";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import { useCartContext } from "../../context/CartContext";

const NavBar = () => {
  const { cart } = useCartContext();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavBrand />
        <NavLinks />
        {cart.length !== 0 ? <CartWidget /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
