import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Card />
      <Footer />
    </>
  );
}

export default App;
