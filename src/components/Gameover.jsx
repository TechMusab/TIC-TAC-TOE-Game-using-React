import React from 'react'

export default function Gameover({winner,handlerestart}) {
    

    return (
        <>
            <div id="game-over">
                <h2>Game Over</h2>
                {winner && <p>{winner} won</p>}
                {!winner && <p>Its a draw</p>}
                <button onClick={handlerestart}>
                    Rematch!
                </button>
            </div>
        </>
    )
}
