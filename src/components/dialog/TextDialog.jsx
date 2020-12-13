import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import React, { useContext } from "react";
import { GameContext } from "../game/GameContextProvider";

export default function TextDialog() {
  const { showDialog, setShowDialog, score, cpuMark } = useContext(GameContext);

  const cpuWinLabel = "¡Has perdido!";
  const userWinLabel = "¡Has ganado!";
  const drawLabel = "¡Empate!";

  const labels = {
    1: cpuWinLabel,
    0: drawLabel,
    [-1]: userWinLabel,
  };

  const getLabel = () => {
    if (score) {
      const cpuScore = score[cpuMark];
      return labels[cpuScore];
    }
  };

  return (
    <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
      <DialogTitle>Fin del juego</DialogTitle>
      <DialogContent style={{textAlign:"center"}} >{getLabel()}</DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={() => setShowDialog(false)}>ok</Button>
      </DialogActions>
    </Dialog>
  );
}
