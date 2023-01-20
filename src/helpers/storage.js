/**
 * 
 * @param {Array<string>} BoardValue Tabler con x y o
 * @param {string} turnValue El valor de cada square
 */
export const setBoardStorage = (BoardValue, turnValue) => {
    window.localStorage.setItem('tic-tac-toe',
    JSON.stringify({
        board: BoardValue,
        turn: turnValue,
    }))
}

/**
 * 
 * @param {string} option "board|turn" Qué data deseamos tener información
 * @returns {null, Array<string>, string} Si no hay nada en el localStorage devuelve null
 */
export const getBoardStorage = (option='board') => {
    const ticTacToe = window.localStorage.getItem('tic-tac-toe');
    return ticTacToe ?
            JSON.parse(ticTacToe)[option]
                     :
            null;

}

/**
 * Función que borra del localStorage la data
 */
export const removeBoardStorage = () => {
    window.localStorage.removeItem('tic-tac-toe');
}