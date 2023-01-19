import React from 'react';

export const Square = ({ children, indexValue, isSelected, onClickSquare }) => {
    const className = isSelected ? 'square is-selected' : 'square';
    return (
        <div
            className={className}
            onClick={() => onClickSquare(indexValue)}
        >
            {children}
        </div>
    )
}
