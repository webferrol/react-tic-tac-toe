import React from 'react';
import { Square } from './components/Square';
import { useTicTacToe } from './hooks/useTicTacToe';
import { TURNS, WINNER } from './types';
import './tic-tac-toe.css';

export const TicTacToeApp = () => {

  const {
    board,
    handleResetGame,
    handleUpdateBoard,
    turn,
    winner,
  } = useTicTacToe();


  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={handleResetGame}>Empezar de nuevo</button>
      <div className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                indexValue={index}
                onClickSquare={handleUpdateBoard}>
                { square }
              </Square>
            )

          })
        }
      </div>
      <div className="turn">
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </div>
      {/* Renderizado condicional */}
      {
        Boolean(winner) && (
          <div className="winner">
            <div className="text">
              <h2>
                {
                  winner === WINNER.XO
                    ? 'Empate'
                    : 'Ganó'
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={handleResetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </div>
        )
      }
    </main>
  )
}
