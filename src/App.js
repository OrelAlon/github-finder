import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let orel = "orel";
  return (
    <Router>
      <div className="App flex flex-col justify-between h-screen">
        <Navbar title={orel} />
        <main>Content</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
