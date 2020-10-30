import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ title }) => {
  const [items, setItems] = useState(null);

  const onAdd = (cantidadSeleccionada) => {
    console.log(`Se agregaron ${cantidadSeleccionada} item/s.`);
  };

  // De momento agrego los productos en un array, con el pictureURL hacia la imagen hosteada en github.
  const itemDB = [
    {
      id: "4Dt7y7",
      title: "Circle Split",
      price: 500,
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/4Dt7y7.jpg",
    },
    {
      id: "Mw3vn6",
      title: "Flower Dots",
      price: 500,
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/Mw3vn6.jpg",
    },
    {
      id: "mwY7cv",
      title: "Bricks on Rain",
      price: 500,
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/mwY7cv.jpg",
    },
    {
      id: "NgA4ii",
      title: "Sun Flowers",
      price: 500,
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/NgA4ii.jpg",
    },
    {
      id: "y3VHYJ",
      title: "Blue Pathway",
      price: 500,
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/y3VHYJ.jpg",
    },
  ];

  const fetchItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemDB);
      }, 2000);
    });
  };

  useEffect(() => {
    fetchItems().then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <div>
      <h3>{title}</h3>
      {items && <ItemList items={items} />}
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
