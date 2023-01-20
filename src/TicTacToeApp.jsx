import React from 'react';
import { Square,WinnerModal } from './components';
import { useTicTacToe } from './hooks/useTicTacToe';
import { TURNS } from './types';
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
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </div>

      {/* Renderizado condicional */}
      <WinnerModal winner={winner} handleResetGame={handleResetGame} />
    </main>
  )
}
