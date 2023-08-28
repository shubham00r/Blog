import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Home />
      <Card />
      <Footer />
    </>
  );
}

export default App;
