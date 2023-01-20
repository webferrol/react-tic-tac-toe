import { useState } from 'react';
import confetti from 'canvas-confetti';
import { checkEndGame, checkWinner, getBoardStorage, removeBoardStorage, setBoardStorage } from '../helpers';
import { TURNS, WINNER } from '../types';

export const useTicTacToe = () => {
    const [board, setBoard] = useState(()=>{
      const boardFromStorage = getBoardStorage('board');
      if(boardFromStorage) return boardFromStorage;
      return Array(9).fill(null)
    }),        
    [turn, setTurn] = useState(()=>{
      return getBoardStorage('turn') ?? TURNS.X; //menos código que 
    }),
    [winner, setWinner] = useState(null);


  const handleUpdateBoard = index => {
   
    if(Boolean(board[index]) || winner!==null) return;


    const {X,O} = TURNS;
    const newTurn = X === turn ? O : X;  
    const newBoard = [...board]

    setTurn(newTurn);

    newBoard[index] = turn;
    setBoard(newBoard);

    //Almacenamos
    setBoardStorage(newBoard, newTurn);

    //Comprobar si hay ganador
    const newWinner = checkWinner(newBoard);
    if(Boolean(newWinner)){
      setWinner((previousValue)=>newWinner);
      confetti();
    }else if(checkEndGame(newBoard)){
      setWinner((previousValue)=>WINNER["XO"]);
    }

  }
  

  const handleResetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    removeBoardStorage();
  }

    return {
        board,
        handleResetGame,
        handleUpdateBoard,
        turn,
        winner,
    }
}
