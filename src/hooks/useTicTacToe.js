import { useState } from 'react';
import { checkEndGame, checkWinner } from '../helpers/check';
import { TURNS, WINNER } from '../types';

export const useTicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null)),
        [turn, setTurn] = useState(TURNS.x),
        [winner, setWinner] = useState(null);


  const handleUpdateBoard = index => {
   
    if(Boolean(board[index]) || winner!==null) return;


    const {x,o} = TURNS;
    const newTurn = x === turn ? o : x;  
    const newBoard = [...board]

    setTurn(newTurn);

    newBoard[index] = turn;
    setBoard(newBoard);

    //Comprobar si hay ganador
    const newWinner = checkWinner(newBoard);
    if(Boolean(newWinner)){
      setWinner((previousValue)=>WINNER[newWinner]);
    }else if(checkEndGame(newBoard)){
      setWinner((previousValue)=>WINNER["XO"]);
    }

  }
  

  const handleResetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  }

    return {
        board,
        handleResetGame,
        handleUpdateBoard,
        turn,
        winner,
    }
}
