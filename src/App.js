import React from "react";
import Grid from "./components/Grid";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Grid numCells={900} />
      <Menu />
    </div>
  );
}

export default App;
