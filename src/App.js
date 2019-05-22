import React from "react";
import "./App.css";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="container">
      <Grid numCells={900} />
    </div>
  );
}

export default App;
