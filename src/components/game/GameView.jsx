import React, { useContext, useEffect } from "react";
import Board from "../board/Board";
import { GameContext } from "./GameContextProvider";
import { Button } from "@material-ui/core";
import {
  VideogameAsset,
  Close,
  RadioButtonUnchecked,
  Replay,
} from "@material-ui/icons";
import TextDialog from "../dialog/TextDialog";

export default function GameView() {
  const {
    boardState,
    cpuMark,
    newGame,
    selectUserMark,
  } = useContext(GameContext);

  const getBoardData = async () => {
    newGame();
  };

  if (!boardState) {
    return (
      <Button startIcon={<VideogameAsset />} onClick={getBoardData}>
        Iniciar Juego
      </Button>
    );
  }

  if (!cpuMark) {
    return (
      <div>
        <h4>Selecciona tu símbolo</h4>
        <Button
          variant="contained"
          color="primary"
          onClick={() => selectUserMark("x")}
        >
          <Close />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => selectUserMark("o")}
        >
          <RadioButtonUnchecked />
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Board />
      <Button
        variant="contained"
        color="primary"
        startIcon={<Replay />}
        onClick={getBoardData}
      >
        Reiniciar
      </Button>
      <TextDialog />
    </div>
  );
}
