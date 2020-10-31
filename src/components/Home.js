import React from "react";
import ItemDetailContainer from "./item-list-container/ItemDetailContainer";
import ItemListContainer from "./item-list-container/ItemListContainer";

const Home = ({ greeting }) => {
  return (
    <main className="container mt-5">
      <h2 className="pt-3 text-center">{greeting}</h2>
      <ItemListContainer title="Ofertas de la semana" />
      <ItemDetailContainer />
    </main>
  );
};

export default Home;
