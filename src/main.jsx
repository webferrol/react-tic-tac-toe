import React from 'react';
import ReactDOM from 'react-dom/client';
import { TicTacToeApp } from './TicTacToeApp';

import './index.css';
    
ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <TicTacToeApp />
    </React.StrictMode>
);

