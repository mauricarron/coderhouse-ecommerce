import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = ({ greeting }) => {
  return (
    <main className="container mt-5">
      <h2 className="pt-3 text-center">{greeting}</h2>
      <ItemListContainer />
    </main>
  );
};

export default Home;
