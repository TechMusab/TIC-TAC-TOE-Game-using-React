import { useEffect, useState } from "react";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import winningCombinations from "./combinations";
import Gameover from "./components/Gameover";
let IntialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [board, setboard] = useState(IntialBoard);
  const [winner, setwinner] = useState(null);
  const [draw, setdraw] = useState(false);
  const [active, setactiive] = useState("X");
  const [log, setlog] = useState([]);
  const handlerestart=()=>{
    setboard(IntialBoard);
    setwinner(null);
    setdraw(false);
    setactiive("X");
    setlog([]);
  }
  const checkdraw = () => {
    for (let b of board) {
      for (let c of b) {
        if (c === null) {
          return;
        }
      }
    }
    if (!winner) {
      return setdraw(true);
    }
    return;
  };
  const checkwin = () => {
    for (let i of winningCombinations) {
      let firstsquare = board[i[0].row][i[0].column];
      let secondsquare = board[i[1].row][i[1].column];
      let thirdsquare = board[i[2].row][i[2].column];
      if (
        firstsquare !== null &&
        firstsquare === secondsquare &&
        secondsquare === thirdsquare
      ) {
        setwinner(firstsquare);
      }
    }
  };
  useEffect(() => {
    checkwin();
    checkdraw();
  }, [board]);
  const handleclick = (rowindex, colindex) => {
    if (board[rowindex][colindex] || winner) return;
    const updatedboard = [...board.map((array) => [...array])];
    updatedboard[rowindex][colindex] = active;
    setboard(updatedboard);
    setlog((prev) => {
      return [
        ...prev,
        { name: active, rowindex: rowindex, colindex: colindex },
      ];
    });
    handleturn();
  };

  const handleturn = () => {
    setactiive((active) => {
      return active == "X" ? "O" : "X";
    });
  };

  return (
    <main>
      <div id="game-container">
      {(winner || draw) && <Gameover winner={winner} handlerestart={handlerestart} />}
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="O" isActive={active === "O"}></Player>
          <Player name="Player 2" symbol="X" isActive={active === "X"}></Player>
        </ol>
        <GameBoard handleclick={handleclick} board={board}></GameBoard>
      </div>
      {log.map((log) => (
        <Log log={log}></Log>
      ))}
    </main>
  );
}

export default App;
