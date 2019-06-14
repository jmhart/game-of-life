import React, { Component } from "react";
import Grid from "./Grid";
import Menu from "./Menu";

class GameOfLife extends Component {
  state = {
    cells: []
  };

  componentDidMount() {
    let cells = [];
    for (let i = 0; i < 900; i++) {
      cells.push({ id: i, isActive: false });
    }
    this.setState({ cells });
  }

  handleStart = () => {
    console.log("Start");
  };

  render() {
    return (
      <React.Fragment>
        <Grid cells={this.state.cells} />
        <Menu handleStart={this.handleStart} />
      </React.Fragment>
    );
  }
}

export default GameOfLife;
