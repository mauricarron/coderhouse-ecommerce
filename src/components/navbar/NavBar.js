import React from "react";
import CartWidget from "./CartWidget";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavBrand />
        <NavLinks />
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
