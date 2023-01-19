import { WINNER_COMBO } from "../types";

/**
 * Chequea si hay un ganador o no
 * @param {Array<string>} boardToCheck Contiene X ó O
 * @returns {string|null} X ó O del ganador o null si aún no se terminó la partida
 */
export const checkWinner = boardToCheck => {
    for (let i = 0; i < WINNER_COMBO.length; i++) {
        const [a, b, c] = WINNER_COMBO[i];
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
    return null;
}

/**
 * 
 * @param {Array<string>} newBoard Tablero con X ó O 
 * @returns {Boolean} True si no queda ningún null
 */
export const checkEndGame = (newBoard) => !newBoard.includes(null);