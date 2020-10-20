import React from "react";
import ItemListContainer from "./ItemListContainer";

const Home = ({ greeting }) => {
  return (
    <main className="container mt-5">
      <h2>{greeting}</h2>
      <ItemListContainer title="Ofertas de la semana" />
    </main>
  );
};

export default Home;
