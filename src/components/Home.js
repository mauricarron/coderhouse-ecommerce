import React from "react";
import ItemListContainer from "./item-list-container/ItemListContainer";

const Home = ({ greeting }) => {
  return (
    <main className="container mt-5">
      <h2 className="pt-3">{greeting}</h2>
      <ItemListContainer title="Ofertas de la semana" />
    </main>
  );
};

export default Home;
