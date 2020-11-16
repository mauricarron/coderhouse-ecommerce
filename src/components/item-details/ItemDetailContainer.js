import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);
  let { id } = useParams();

  const itemDB = [
    {
      id: "4Dt7y7",
      title: "Circle Split",
      price: 500,
      description:
        "Maceta de autor realizada con técnica de vitrofusión y materiales con la más alta calidad. Mide 20x20cm y se puede colocar tanto en interiores como exteriores.",
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/4Dt7y7.jpg",
    },
    {
      id: "Mw3vn6",
      title: "Flower Dots",
      price: 500,
      description:
        "Maceta de autor realizada con técnica de vitrofusión y materiales con la más alta calidad. Mide 20x20cm y se puede colocar tanto en interiores como exteriores.",
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/Mw3vn6.jpg",
    },
    {
      id: "mwY7cv",
      title: "Bricks on Rain",
      price: 500,
      description:
        "Maceta de autor realizada con técnica de vitrofusión y materiales con la más alta calidad. Mide 20x20cm y se puede colocar tanto en interiores como exteriores.",
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/mwY7cv.jpg",
    },
    {
      id: "NgA4ii",
      title: "Sun Flowers",
      price: 500,
      description:
        "Maceta de autor realizada con técnica de vitrofusión y materiales con la más alta calidad. Mide 20x20cm y se puede colocar tanto en interiores como exteriores.",
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/NgA4ii.jpg",
    },
    {
      id: "y3VHYJ",
      title: "Blue Pathway",
      price: 500,
      description:
        "Maceta de autor realizada con técnica de vitrofusión y materiales con la más alta calidad. Mide 20x20cm y se puede colocar tanto en interiores como exteriores.",
      pictureUrl:
        "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/y3VHYJ.jpg",
    },
  ];

  const getItemDetail = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemDB.find((item) => item.id === id));
      }, 200);
    });
  };

  useEffect(() => {
    getItemDetail(id).then((response) => setItemDetail(response));
  }, [id]);

  return itemDetail && <ItemDetail item={itemDetail} />;
};

export default ItemDetailContainer;
