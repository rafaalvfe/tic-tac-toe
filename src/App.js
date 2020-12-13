import "./App.css";
import { Grid } from "@material-ui/core";
import Board from "./components/board/Board";
import GameContextProvider from "./components/game/GameContextProvider";
import GameView from "./components/game/GameView";

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <h2>TIC-TAC-TOE</h2>
        <Grid container>
          <Grid item xs={12}>
            <GameView />
          </Grid>
        </Grid>
      </GameContextProvider>
    </div>
  );
}

export default App;
