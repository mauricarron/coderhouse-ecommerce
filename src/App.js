import React from "react";
import Home from "./components/Home";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home greeting="Bienvenidos a MosaiCó" />
    </>
  );
}

export default App;
