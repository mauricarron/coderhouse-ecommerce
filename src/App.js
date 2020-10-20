import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home greeting="Bienvenidos a MosaiCó" />
    </>
  );
}

export default App;
