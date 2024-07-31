import React, { useState } from "react";

export default function GameBoard({symbol,handleturn,handleclick,board}) {
  
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowindex) => {
          return (
            <li key={rowindex}>
              <ol>
                {row.map((col, colindex) => {
                  return (
                    <li key={colindex}>
                      <button onClick={() => handleclick(rowindex, colindex)}>
                        {col}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </>
  );
}
