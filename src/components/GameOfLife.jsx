import React, { Component } from "react";
import Grid from "./Grid";
import Menu from "./Menu";

class GameOfLife extends Component {
  state = {};

  handleStart = () => {
    console.log("Start");
  };
  render() {
    return (
      <React.Fragment>
        <Grid numCells={900} />
        <Menu handleStart={this.handleStart} />
      </React.Fragment>
    );
  }
}

export default GameOfLife;
