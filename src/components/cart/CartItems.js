import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase";
import { useCartContext } from "../../context/CartContext";
import CartItemDetail from "./CartItemDetail";
import BuyerForm from "./BuyerForm";

const CartItems = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    email2: "",
  });

  const { cart, clear } = useCartContext();
  let totalPrice = 0;

  async function createOrder(e) {
    e.preventDefault();

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
        buyer: {
          name: formValues.name,
          phone: formValues.phone,
          email: formValues.email,
        },
        items: items,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        total: totalPrice,
      };

      try {
        const doc = await orders.add(newOrder);
        await batch.commit();
        clear();
        alert(`Orden creada con el id: ${doc.id}`);
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
            <BuyerForm
              formValues={formValues}
              setFormValues={setFormValues}
              createOrder={createOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
