import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItemDetail from "./CartItemDetail";

const CartItems = () => {
  const [formValues, setFormValues] = useState({});
  const { cart, clear } = useCartContext();
  let totalPrice = 0;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  async function createOrder() {
    const db = getFirestore();
    const items = cart.map((prod) => {
      return {
        title: prod.item.title,
        id: prod.item.id,
        price: prod.item.price,
        quantity: prod.quantity,
      };
    });

    const itemsToUpdate = db.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      items.map((item) => item.id)
    );

    const query = await itemsToUpdate.get();
    const batch = db.batch();

    const outOfStock = [];
    query.docs.forEach((docSnapshot, i) => {
      if (docSnapshot.data().stock >= items[i].quantity) {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - items[i].quantity,
        });
      } else {
        outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
      }
    });

    if (outOfStock.length === 0) {
      const orders = db.collection("orders");

      const newOrder = {
        buyer: formValues,
        items: items,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        total: totalPrice,
      };

      try {
        const doc = await orders.add(newOrder);
        await batch.commit();
        console.log("Orden creada con el id: ", doc.id);
      } catch (error) {
        console.log("Error creando la orden: ", error);
      }
    }
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
                    name="name"
                    type="text"
                    className="form-control"
                    id="inputFullName"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPhone">Teléfono</label>
                  <input
                    name="phone"
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmailCheck">Confirmar Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="inputEmailCheck"
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/">
                  <span className="fas fa-arrow-left mr-2 text-success"></span>
                  Seguir Comprando
                </Link>
                <Link
                  to="/cart"
                  type="submit"
                  onClick={createOrder}
                  className="btn btn-success"
                >
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
