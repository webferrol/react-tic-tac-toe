
import { Square } from './';
import { WINNER } from '../types';
export const WinnerModal = ({ winner, handleResetGame }) => {

    if (!Boolean(winner)) return;

    const winnerText = winner === WINNER.XO ? 'Empate' : 'Ganó';

    return (
        <div className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
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
