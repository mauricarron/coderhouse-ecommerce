import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const itemId = itemCollection.doc(id);

    itemId
      .get()
      .then((doc) => {
        if (!doc.exists) {
          alert("No hay resultados.");
        }
        setItemDetail({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error en la busqueda de items: ", error);
      });
  }, [id]);

  return itemDetail && <ItemDetail item={itemDetail} />;
};

export default ItemDetailContainer;
