import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import BoardBtn from "./BoardBtn";
import { GameContext } from "../game/GameContextProvider";

const boardMargin = 20;

const styles = {
  marginTop: `${boardMargin}px`,
  marginBottom: `${boardMargin}px`,
};

export default function Board() {
  const { boardState, cpuMark, makeMove } = useContext(
    GameContext
  );

  const requestMove = async (position) => {
    makeMove(position);
  };

  const getBtnsForRow = (row) => {
    const board = boardState || ["", "x", "", "", "", "", "", "", ""];
    const start = row * 3;

    return board.slice(start, start + 3).map((mark, i) => {
      let disabled = false;
      if (cpuMark) {
        disabled = true;
      }
      return (
        <BoardBtn
          mark={mark}
          key={`ttt-boardbtn-${i}`}
          row={row}
          col={i}
          enable={disabled}
          onClick={requestMove}
        />
      );
    });
  };

  return (
    <Grid style={styles} container justify="center">
      <Grid item xs={12}>
        {getBtnsForRow(0)}
      </Grid>
      <Grid item xs={12}>
        {getBtnsForRow(1)}
      </Grid>
      <Grid item xs={12}>
        {getBtnsForRow(2)}
      </Grid>
    </Grid>
  );
}
