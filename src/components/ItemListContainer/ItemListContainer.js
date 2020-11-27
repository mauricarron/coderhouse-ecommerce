import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    let itemsById = itemCollection;

    if (categoryId) {
      itemsById = itemCollection.where("category", "==", categoryId);
    }

    itemsById
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          alert("No hay resultados.");
        }
        setItems(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        console.log("Error en la busqueda de items: ", error);
      });
  }, [categoryId]);

  return <div>{items && <ItemList items={items} />}</div>;
};

export default ItemListContainer;
