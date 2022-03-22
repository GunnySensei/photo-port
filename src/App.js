import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
