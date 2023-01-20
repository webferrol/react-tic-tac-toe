export const setBoardStorage = (BoardValue, turnValue) => {
    window.localStorage.setItem('tic-tac-toe',
    JSON.stringify({
        board: BoardValue,
        turn: turnValue,
    }))
}

export const getBoardStorage = (option='board') => {
    const ticTacToe = window.localStorage.getItem('tic-tac-toe');
    return ticTacToe ?
            JSON.parse(ticTacToe)[option]
                     :
            null;

}

export const removeBoardStorage = () => {
    window.localStorage.removeItem('tic-tac-toe');
}