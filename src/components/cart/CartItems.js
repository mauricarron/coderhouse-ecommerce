import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItemDetail from "./CartItemDetail";

const CartItems = () => {
  const { cart, clear } = useCartContext();
  let totalPrice = 0;

  async function createOrder() {
    const newOrder = {
      buyer: {
        name: "Sopita",
        phone: "+541143432323",
        email: "nombre@email.com",
      },
      items: [
        { id: "1", title: "zapas", price: 200, quantity: 2 },
        { id: "2", title: "gorro", price: 100, quantity: 1 },
      ],
      date: firebase.firestore.FieldValue.serverTimestamp(),
      total: 500,
    };

    const db = getFirestore();
    const orders = db.collection("orders");

    try {
      const doc = await orders.add(newOrder);
      console.log("Orden creada con el id: ", doc.id);
    } catch (error) {
      console.log("Error creando la orden: ", error);
    }

    //items.docs.map(d => ({ ...d.data(), id: d.id })).map(({ id, title, price, stock }) => ({ id, title, price, stock } ) )
    /*
    const itemQueryByManyId = await db.collection("items")
        .where(firebase.firestore.FieldPath.documentId(), 
        'in', ['Q0VfIIoYzn6Lpc2FBQUg', 'iEuV6tEihe7345pKDL7A'] )
        .get();
 */
  }

  return (
    <div className="mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row d-flex flex-column justify-content-center">
          <h3 className="display-5 mb-2 text-center">Carrito</h3>
          <p className="mb-5 text-center">
            <i className="text-info font-weight-bold">{cart.length}</i> items en
            tu carrito
          </p>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <table
              id="shoppingCart"
              className="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th style={{ width: 60 + "%" }}>Producto</th>
                  <th style={{ width: 20 + "%" }}>Precio</th>
                  <th style={{ width: 10 + "%" }}>Cantidad</th>
                  <th
                    style={{ width: 10 + "%", cursor: "pointer" }}
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

          <div className="col-sm-12 col-lg-4">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputFullName">Nombre Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFullName"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPhone">Teléfono</label>
                  <input type="tel" className="form-control" id="inputPhone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmailCheck">Confirmar Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmailCheck"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/">
                  <span className="fas fa-arrow-left mr-2 text-success"></span>
                  Seguir Comprando
                </Link>
                <Link to="/cart" type="submit" className="btn btn-success">
                  Terminar Compra
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
