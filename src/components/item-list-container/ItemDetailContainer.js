import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);

  const fetchItemDetail = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: "4Dt7y7",
          description:
            "Maceta 20x20cm de Vitrofusión. Diseño original fabricada con la más alta calidad de materiales.",
          title: "Circle Split",
          price: 500,
          pictureUrl:
            "https://raw.githubusercontent.com/mdCarron/coderhouse-ecommerce/master/src/img/products/4Dt7y7.jpg",
        });
      }, 2000);
    });
  };

  useEffect(() => {
    fetchItemDetail().then((response) => {
      setItemDetail(response);
    });
  }, []);

  return itemDetail && <ItemDetail item={itemDetail} />;
};

export default ItemDetailContainer;
