import React from "react";
import CartItemDetail from "./CartItemDetail";
import { useCartContext } from "../../context/CartContext";

const CartItems = () => {
  const { cart, clear } = useCartContext();
  let totalPrice = 0;

  return (
    <div className="mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-12">
            <h3 className="display-5 mb-2 text-center">Carrito</h3>
            <p className="mb-5 text-center">
              <i className="text-info font-weight-bold">{cart.length}</i> items
              en tu carrito
            </p>
            <table
              id="shoppingCart"
              className="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th style={{ width: 60 + "%" }}>Producto</th>
                  <th style={{ width: 12 + "%" }}>Precio</th>
                  <th style={{ width: 10 + "%" }}>Cantidad</th>
                  <th
                    style={{ width: 16 + "%", cursor: "pointer" }}
                    className="text-danger"
                    onClick={clear}
                  >
                    Vaciar
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((producto) => {
                  totalPrice += producto.item.price * producto.quantity;

                  return (
                    <CartItemDetail
                      producto={producto}
                      key={producto.item.id}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="float-right text-right">
              <h4>Subtotal</h4>
              <h1>${totalPrice}</h1>
            </div>
          </div>
        </div>
        <div className="row mt-4 d-flex align-items-center">
          <div className="col-sm-6 order-md-2 text-right">
            <a
              href="catalog.html"
              className="btn btn-success mb-4 btn-lg pl-5 pr-5"
            >
              Comprar
            </a>
          </div>
          <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <a href="catalog.html">
              <span className="fas fa-arrow-left mr-2 text-success"></span>{" "}
              Seguir Comprando
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
