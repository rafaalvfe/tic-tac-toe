import React, { useState, createContext } from "react";
import sendRequest from "../../api/sendRequest";

export const GameContext = createContext({});

export default function GameContextProvider({ children }) {
  const [matchId, setMatchId] = useState();
  const [boardState, setBoardState] = useState();
  const [cpuMark, setCpuMark] = useState();
  const [score, setScore] = useState();
  const [token, setToken] = useState();
  const [error, setError] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const updateMatch = (matchData) => {
    console.log("updating match");
    if (matchData) {
      const { matchId, boardState, score, token, cpuMark } = matchData;
      setMatchId(matchId);
      setBoardState(boardState);
      setCpuMark(cpuMark);
      setScore(score);
      setToken(token);
      setError(false);
      
      if(score) {
        setShowDialog(score.finished);
      }
    }
  };

  const newGame = () => {
    setMatchId();
    setBoardState();
    setCpuMark();
    setScore();
    setToken();

    requestApi();
  };

  const makeMove = (position) => {
    const nextMove = {
      position,
      char: cpuMark === "o" ? "x" : "o",
    };

    const newData = {
      matchId,
      boardState,
      nextMove,
      cpuMark,
    };

    requestApi(newData);
  };

  const requestApi = async (matchData) => {
    try {
      const response = await sendRequest(token, matchData);
      updateMatch(response);
    } catch (error) {
      console.log(error)
      setError(true);
    }
  };

  const selectUserMark = (mark) => {
    const marks = { o: "x", x: "o" };

    setCpuMark(marks[mark]);
  };

  return (
    <GameContext.Provider
      value={{
        matchId,
        boardState,
        cpuMark,
        score,
        token,
        newGame,
        selectUserMark,
        makeMove,
        showDialog,
        setShowDialog
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
